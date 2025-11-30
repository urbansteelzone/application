import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

export const todos = pgTable('todo', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
