export default function RegisterPage() {
  return (
    <main className="max-w-md mx-auto mt-20 p-6 border rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Create Account</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border rounded-md px-4 py-2" />
        <input type="email" placeholder="Email" className="w-full border rounded-md px-4 py-2" />
        <input type="password" placeholder="Password" className="w-full border rounded-md px-4 py-2" />
        <button className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700">Register</button>
      </form>
    </main>
  );
}


