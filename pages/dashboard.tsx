import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <h1 className="p-6 text-3xl font-bold">🎉 Welcome to your Dashboard</h1>
      </SignedIn>
      <SignedOut>
        <div className="p-6">
          <h2 className="text-xl mb-4">Please sign in to access your dashboard.</h2>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  );
}
