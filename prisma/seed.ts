import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hashPassword('admin123')
  const admin = await prisma.user.upsert({
    where: { email: 'admin@programmingbrains.com' },
    update: {},
    create: {
      email: 'admin@programmingbrains.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'admin',
    },
  })

  // Create sample users
  const user1Password = await hashPassword('user123')
  const user1 = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      email: 'john@example.com',
      name: 'John Doe',
      password: user1Password,
      role: 'user',
    },
  })

  const user2Password = await hashPassword('user123')
  const user2 = await prisma.user.upsert({
    where: { email: 'jane@example.com' },
    update: {},
    create: {
      email: 'jane@example.com',
      name: 'Jane Smith',
      password: user2Password,
      role: 'user',
    },
  })

  console.log('Database seeded successfully!')
  console.log({ admin, user1, user2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
