interface Props { params: { slug: string } }

export default function CourseDetailPage({ params }: Props) {
  const title = params.slug.replace(/-/g, " ");
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 capitalize">{title}</h1>
      <p className="text-gray-600 mb-6">Detailed syllabus, modules, and enrollment options go here.</p>
      <button className="bg-violet-600 text-white px-6 py-3 rounded-md hover:bg-violet-700">Enroll Now</button>
    </main>
  );
}


