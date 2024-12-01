import {
  pgTable,
  pgEnum,
  integer,
  decimal,
  date,
  text,
  uuid,
  varchar,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const rolesEnum = pgEnum("roles", ["gymmer", "trainer", "admin"]);

export const roleEnum = pgEnum("role", ["gymmer", "trainer", "admin"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  surname: varchar("surname", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 9 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: roleEnum("role").notNull().default("gymmer"),
  country: varchar("country", { length: 255 }),
  city: varchar("city", { length: 255 }),
  gymName: varchar("gym_name", { length: 255 }),
  age: integer("age").notNull(),
  height: decimal("height", { precision: 5, scale: 2 }),
  weight: decimal("weight", { precision: 5, scale: 2 }),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at").notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many, one }) => ({
  trainings: many(trainings),
  friends: many(users, {
    relationName: "friendships",
  }),
  session: one(sessions, {
    fields: [users.id],
    references: [sessions.userId],
  }),
}));

export const friendships = pgTable("friendships", {
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  friendId: uuid("friend_id")
    .notNull()
    .references(() => users.id),
});

export const trainings = pgTable("trainings", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  weeklyFrequency: integer("weekly_frequency").notNull(),
  period: integer("period").notNull(),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at").notNull().defaultNow(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
});
export const trainingsRelations = relations(trainings, ({ many, one }) => ({
  exercises: many(exercises),
  user: one(users, {
    fields: [trainings.userId],
    references: [users.id],
  }),
}));

export const exercises = pgTable("exercises", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  series: varchar("series", { length: 50 }).notNull(),
  reps: jsonb("reps").notNull(), // Storing as JSON string
  kilograms: decimal("kilograms", { precision: 5, scale: 2 }),
  rpe: decimal("rpe", { precision: 3, scale: 1 }),
  trainingNumber: integer("training_number").notNull(),
  createdAt: date("created_at").notNull().defaultNow(),
  updatedAt: date("updated_at").notNull().defaultNow(),
  trainingId: uuid("training_id")
    .notNull()
    .references(() => trainings.id),
});
export const exercisesRelations = relations(exercises, ({ one }) => ({
  training: one(trainings, {
    fields: [exercises.trainingId],
    references: [trainings.id],
  }),
}));

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  expirationIn: date("expiration_in").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
});
export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
