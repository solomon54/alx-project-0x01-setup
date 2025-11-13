import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { useState } from "react";
import { compile } from "tailwindcss";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  console.log(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button
            onClick={handleOpenModal}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map(
            (
              {
                name,
                email,
                phone,
                website,
                id,
                username,
                address,
                company,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                email={email}
                phone={phone}
                id={id}
                company={company}
                username={username}
                address={address}
                website={website}
                key={key}
              />
            )
          )}
        </div>
      </main>
      
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
export default Users;