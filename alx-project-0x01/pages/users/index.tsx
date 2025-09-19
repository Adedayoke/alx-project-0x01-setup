import Header from '@/components/layout/Header'
import React, { useState } from 'react'
import UserCard from '@/components/common/UserCard'
import UserModal from '@/components/common/UserModal'
import { UserProps, UserData } from '@/interfaces'

interface UsersProps {
  users: UserProps[]
}

function Users({ users }: UsersProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddUser = (user: UserData) => {
    // For now, just log the new user. In a real app, you'd send to API.
    console.log('New user added:', user);
    // Optionally, add to local state if you want to display immediately
  };

  return (
    <div>
        <Header />
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center my-8">Users</h1>
          <div className="text-center mb-8">
            <button
              onClick={handleOpenModal}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Add User
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
          {isModalOpen && (
            <UserModal onClose={handleCloseModal} onSubmit={handleAddUser} />
          )}
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
