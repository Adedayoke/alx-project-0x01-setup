import Header from '@/components/layout/Header'
import React from 'react'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'

interface UsersProps {
  users: UserProps[]
}

function Users({ users }: UsersProps) {
  return (
    <div>
        <Header />
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center my-8">Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}
