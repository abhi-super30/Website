export default function AdminSidebar() {
  const linkClass = "block px-3 py-2 rounded-md text-sm hover:bg-gray-100";
  return (
    <aside className="w-60 shrink-0 border-r bg-white h-full">
      <div className="px-4 py-4 border-b">
        <div className="text-base font-semibold">Admin</div>
        <div className="text-xs text-gray-500">AbhishekClasses</div>
      </div>
      <nav className="p-3 space-y-1">
        <a className={linkClass} href="/admin">Dashboard</a>
        <a className={linkClass} href="/admin/courses">Courses</a>
        <a className={linkClass} href="/admin/users">Users</a>
        <a className={linkClass} href="/admin/orders">Orders</a>
      </nav>
    </aside>
  );
}


