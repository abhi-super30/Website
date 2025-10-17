export default function AdminOrdersPage() {
  const orders = [
    { id: "ord_1001", user: "Aarav", course: "DSA Masterclass", amount: "₹4,999", status: "paid" },
    { id: "ord_1002", user: "Isha", course: "System Design Pro", amount: "₹6,999", status: "refunded" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>
      <div className="overflow-x-auto bg-white border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o)=> (
              <tr key={o.id} className="border-t">
                <td className="px-4 py-3">{o.id}</td>
                <td className="px-4 py-3">{o.user}</td>
                <td className="px-4 py-3">{o.course}</td>
                <td className="px-4 py-3">{o.amount}</td>
                <td className="px-4 py-3 capitalize">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


