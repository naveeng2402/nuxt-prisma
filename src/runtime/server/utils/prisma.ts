import { PrismaClient } from '@prisma/client'

let prisma : PrismaClient|null = null

export const usePrisma = ()=>{
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!prisma) {
    prisma = new PrismaClient()
  }
}
return prisma
}