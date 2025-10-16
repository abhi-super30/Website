export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">AbhishekClasses</h3>
          <p>Master interviews and land top roles with mentor-led prep.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/courses" className="hover:text-violet-700">Courses</a></li>
            <li><a href="/pricing" className="hover:text-violet-700">Pricing</a></li>
            <li><a href="/contact" className="hover:text-violet-700">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Connect</h4>
          <p>Email: info@abhishekclasses.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} AbhishekClasses. All rights reserved.
      </div>
    </footer>
  );
}


