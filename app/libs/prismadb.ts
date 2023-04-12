import { PrismaClient } from "@prisma/client";

// Данный код предотвращает размножение сущностей client из-за Hot Reload в Next.js 13
declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client;

