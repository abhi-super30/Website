export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[{k:"Users",v:"1,240"},{k:"Orders",v:"312"},{k:"Revenue",v:"₹8.2L"}].map((s)=> (
          <div key={s.k} className="bg-white border rounded-lg p-5">
            <div className="text-sm text-gray-500">{s.k}</div>
            <div className="text-2xl font-bold mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


