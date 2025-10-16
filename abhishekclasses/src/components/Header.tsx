export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold flex items-center justify-center">AC</div>
          <span className="text-lg font-semibold">AbhishekClasses</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="/courses" className="text-sm hover:text-violet-700">Courses</a>
          <a href="/about" className="text-sm hover:text-violet-700">About</a>
          <a href="/contact" className="text-sm hover:text-violet-700">Contact</a>
        </nav>
        <div className="flex gap-3">
          <a href="/auth/login" className="text-sm px-4 py-2 border rounded-md hover:bg-gray-50">Log in</a>
          <a href="/auth/register" className="text-sm px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700">Sign Up</a>
        </div>
      </div>
    </header>
  );
}


