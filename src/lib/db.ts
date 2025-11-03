import fs from 'fs';
import path from 'path';

export type User = {
  id: string;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
};

export type ResetToken = {
  email: string;
  token: string;
  expiresAt: string;
};

type Database = {
  users: User[];
  resetTokens: ResetToken[];
};

const dbPath = path.join(process.cwd(), 'src', 'data', 'users.json');

export const readDB = (): Database => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { users: [], resetTokens: [] };
  }
};

export const writeDB = (data: Database): void => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export const findUserByEmail = (email: string): User | undefined => {
  const db = readDB();
  return db.users.find(
    user => user.email.toLowerCase() === email.toLowerCase()
  );
};

export const findUserById = (id: string): User | undefined => {
  const db = readDB();
  return db.users.find(user => user.id === id);
};

export const createUser = (userData: Omit<User, 'id' | 'createdAt'>): User => {
  const db = readDB();
  const newUser: User = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString(),
  };
  db.users.push(newUser);
  writeDB(db);
  return newUser;
};

export const createResetToken = (email: string, token: string): void => {
  const db = readDB();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour
  db.resetTokens = db.resetTokens.filter(t => t.email !== email);
  db.resetTokens.push({ email, token, expiresAt });
  writeDB(db);
};

export const findResetToken = (token: string): ResetToken | undefined => {
  const db = readDB();
  return db.resetTokens.find(
    t => t.token === token && new Date(t.expiresAt) > new Date()
  );
};

export const deleteResetToken = (token: string): void => {
  const db = readDB();
  db.resetTokens = db.resetTokens.filter(t => t.token !== token);
  writeDB(db);
};

export const updateUserPassword = (
  email: string,
  password: string
): boolean => {
  const db = readDB();
  const user = db.users.find(
    u => u.email.toLowerCase() === email.toLowerCase()
  );
  if (!user) {
    return false;
  }
  user.password = password;
  writeDB(db);
  return true;
};
