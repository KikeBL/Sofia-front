import { lucia } from "@/auth";
import { Argon2id } from "oslo/password";
import { db, eq, User } from "astro:db";

import type { DatabaseUser } from "../../../../db/config";
import type { APIContext } from "astro";

export async function POST(context: APIContext): Promise<Response> {
    const formData = await context.request.formData();
    const username = formData.get("username");
    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return new Response(JSON.stringify({ error: "Invalid username" }), {
            status: 400
        });
    }
    const password = formData.get("password");
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return new Response(JSON.stringify({ error: "Invalid password" }), {
            status: 400
        });
    }


    const result = await db.select().from(User).where(
        eq(User.username, username)
    );

    const existingUser = result[0] as DatabaseUser;
    if (!existingUser) {
        return new Response(
            JSON.stringify({
                error: "Incorrect username or password"
            }),
            {
                status: 400
            }
        );
    }

    const validPassword = await new Argon2id().verify(existingUser.hashed_password, password);
    if (!validPassword) {
        return new Response(
            JSON.stringify({
                error: "Incorrect username or password"
            }),
            {
                status: 400
            }
        );
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return new Response();
}