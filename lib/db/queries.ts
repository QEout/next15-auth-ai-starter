import { eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { db } from './db';
import { users, posts, aiCharacters, interactions } from './schema';

// 用户相关查询
export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string, nickname?: string) {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);

  return await db.insert(users).values({
    email,
    password: hash,
    nickname,
  });
}

// 帖子相关查询
export async function createPost(userId: number, content: string, images?: string[]) {
  return await db.insert(posts).values({
    userId,
    content,
    images,
  });
}

export async function getPosts(limit: number = 10, offset: number = 0) {
  return await db
    .select()
    .from(posts)
    .limit(limit)
    .offset(offset)
    .orderBy(posts.createdAt);
}

// AI角色相关查询
export async function getAiCharacters() {
  return await db.select().from(aiCharacters);
}

export async function createAiCharacter(
  name: string,
  personality: string,
  type: string,
  interests: string[],
  background?: string,
  avatar?: string,
) {
  return await db.insert(aiCharacters).values({
    name,
    personality,
    type,
    interests,
    background,
    avatar,
  });
}

// 互动相关查询
export async function createInteraction(
  postId: number,
  aiCharacterId: number,
  type: 'like' | 'comment',
  content?: string,
) {
  return await db.insert(interactions).values({
    postId,
    aiCharacterId,
    type,
    content,
  });
}

export async function getPostInteractions(postId: number) {
  return await db
    .select()
    .from(interactions)
    .where(eq(interactions.postId, postId))
    .orderBy(interactions.createdAt);
}
