import { PrismaClient } from '@prisma/client';

// Ensure PrismaClient is only instantiated once in non-production environments
const globalPrisma = globalThis as unknown as { prisma: PrismaClient };

// Create a PrismaClient instance if it doesn't exist, or reuse the existing one
export const prisma = globalPrisma.prisma || new PrismaClient();

// In non-production environments, store the Prisma instance globally to avoid multiple instances
if (process.env.NODE_ENV !== 'production') {
  globalPrisma.prisma = prisma;
}
