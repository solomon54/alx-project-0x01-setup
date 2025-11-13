import Header from "@/components/layout/Header";

export default function UsersPage({ posts }: { posts: any[] }) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <ul className="mt-4 space-y-2">
          {posts.map((user) => (
            <li key={user.id} className="p-4 border rounded-md">
              <strong>{user.name}</strong> — @{user.username}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return { props: { posts } };
}
