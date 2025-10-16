export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Learn. Practice. Crack <span className="text-violet-600">Top Tech Jobs</span>.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          AbhishekClasses helps you master coding interviews and system design with real mentors.
        </p>
        <a href="/courses" className="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700">
          Explore Courses
        </a>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "Data Structures", desc: "Master concepts with hands-on coding problems." },
            { title: "System Design", desc: "Ace scalable architecture interviews." },
            { title: "Mock Interviews", desc: "Real interview experience with experts." },
          ].map((item) => (
            <div key={item.title} className="bg-white shadow-sm p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
