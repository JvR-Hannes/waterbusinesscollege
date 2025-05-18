import Link from 'next/link';

const blogPosts = [
  {
    title: 'Empowering Communities Through Water Education',
    excerpt:
      'Discover how our programs are making a real impact in rural and urban areas by training the next generation of water professionals.',
    slug: 'empowering-communities-through-water-education',
  },
  {
    title: 'How to Start Your Own Water Purification Business',
    excerpt:
      'A step-by-step guide for aspiring entrepreneurs looking to break into the water sector with the right tools and qualifications.',
    slug: 'start-your-own-water-purification-business',
  },
  {
    title: 'Water Reticulation Qualification – What You Need to Know',
    excerpt:
      'This article outlines the core modules and practical training involved in the NQF Level 4 Water Reticulation qualification.',
    slug: 'water-reticulation-qualification-overview',
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Latest News & Insights
        </h2>
        <div className="flex justify-end mt-6">
          <Link
            href="/blog-page"
            className="inline-block bg-blue-600 text-white mb-6 px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            View All Blog Posts
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}