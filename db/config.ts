import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
	columns: {
		id: column.text({
			primaryKey: true
    }),

    username: column.text({
      unique: true
    }),

    hashed_password: column.text(),
	}
});

const Session = defineTable({
	columns: {
		id: column.text({
			primaryKey: true
		}),
		expiresAt: column.date(),
		userId: column.text({
			references: () => User.columns.id
		})
	}
});

export default defineDb({
	tables: {
		User,
		Session
	}
});

export interface DatabaseUser {
  id: string;
  username: string;
  hashed_password: string;
}
