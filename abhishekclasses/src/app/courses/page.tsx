export default function CoursesPage() {
  const courses = [
    { slug: "dsa-masterclass", title: "DSA Masterclass", description: "Comprehensive DSA with hands-on problems.", price: "₹4,999" },
    { slug: "system-design", title: "System Design Pro", description: "High-level design and case studies.", price: "₹6,999" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c) => (
          <div key={c.slug} className="bg-white border rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-100" />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{c.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-violet-700">{c.price}</span>
                <a href={`/courses/${c.slug}`} className="text-sm text-white bg-violet-600 px-4 py-2 rounded-md hover:bg-violet-700">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


