export default function AdminUsersPage() {
  const users = [
    { id: 1, name: "Aarav", email: "aarav@example.com", role: "student" },
    { id: 2, name: "Isha", email: "isha@example.com", role: "instructor" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Users</h1>
      <div className="overflow-x-auto bg-white border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u)=> (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3 capitalize">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


