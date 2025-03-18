import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, varchar, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

// 用户表
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 64 }).unique().notNull(),
  password: varchar('password', { length: 64 }).notNull(),
  nickname: varchar('nickname', { length: 32 }),
  avatar: text('avatar'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type IUser = InferSelectModel<typeof users>;

// 帖子表
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  content: text('content').notNull(),
  images: text('images').array(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type IPost = InferSelectModel<typeof posts>;

// AI角色表
export const aiCharacters = pgTable('ai_characters', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 32 }).notNull(),
  avatar: text('avatar'),
  personality: text('personality').notNull(),
  interests: text('interests').array(),
  type: varchar('type', { length: 32 }).notNull(), // human, animal, alien等
  background: text('background'),
  createdAt: timestamp('created_at').defaultNow(),
});

export type IAiCharacter = InferSelectModel<typeof aiCharacters>;

// 互动表（点赞、评论）
export const interactions = pgTable('interactions', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').references(() => posts.id),
  aiCharacterId: integer('ai_character_id').references(() => aiCharacters.id),
  type: varchar('type', { length: 16 }).notNull(), // like, comment
  content: text('content'), // 评论内容
  createdAt: timestamp('created_at').defaultNow(),
});

export type IInteraction = InferSelectModel<typeof interactions>;
