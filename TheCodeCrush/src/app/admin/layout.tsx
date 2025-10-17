import AdminSidebar from "@/components/admin/AdminSidebar";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-0px)] flex">
      <AdminSidebar />
      <div className="flex-1">
        <header className="border-b px-6 py-3 flex items-center justify-between bg-white">
          <div className="font-semibold">Admin Panel</div>
          <Link href="/" className="text-sm text-violet-700 hover:underline">Back to site</Link>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}


