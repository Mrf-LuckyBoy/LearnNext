export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-8xl">Hello, Next.js!</h1>
        <h2 className="text-5xl mt-4">This is my secret key: {process.env.NEXTAUTH_SECRET}</h2>
      </div>
    </>
  );
}
