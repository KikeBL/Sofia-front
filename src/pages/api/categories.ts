import type { APIRoute } from "astro";
import { lucia } from "@/auth";
import openapi from "../../resources/openapi.json";

interface apiPart {
    category: string,
    subcategory: string[]
}

export const GET: APIRoute = async ({ params, request }): Promise<Response> => {
    let paths: string[] = Object.keys(openapi.paths)
    var categories: apiPart[] = []

    paths.map((path) => {
        let parts = path.split("/")

        let apiPart: apiPart = {
            category: parts[1],
            subcategory: []
        }

        paths.map((path) => {
            let subparts = path.split("/")
            if(subparts[1] !== parts[1]) return

            if (subparts[1] === parts[1] && subparts[2] !== undefined && !apiPart.subcategory.includes(subparts[2])) {
                apiPart.subcategory.push(subparts[2])
            }
        })

        categories.map(e => e.category).indexOf(parts[1]) === -1 ? categories.push(apiPart) : null
    })

    return new Response(JSON.stringify(categories), {
        headers: {
            "content-type": "application/json",
        },
    })
}