import { create } from "domain";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createDeflate } from "zlib";

export const todosTable = pgTable("todos", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    todo: text().notNull(),
    createdAT: timestamp('created_at').defaultNow().notNull(),
    updatedAT: timestamp('updated_at').$onUpdate(() => new Date()).notNull()
});
