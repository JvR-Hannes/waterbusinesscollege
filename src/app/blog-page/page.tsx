import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'Achieve ESG Goals with…',
    excerpt: 'Discover how our strategies support ESG compliance for businesses of all sizes.',
    slug: 'targeted-email-campaign-3',
    date: 'June 10, 2023',
    image: '/images/blocks.png',
  },
  {
    title: 'How Achieving Net Positive…',
    excerpt: 'Learn how your business can go beyond sustainability to become regenerative.',
    slug: 'targeted-email-campaign-2',
    date: 'June 10, 2023',
    image: '/images/recycle.jpg',
  },
  {
    title: 'Why Water Conservation Is…',
    excerpt: 'Explore methods to reduce water usage without compromising performance.',
    slug: 'targeted-email-campaign',
    date: 'June 10, 2023',
    image: '/images/smoke.jpg',
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-gray-800 mt-16 mb-4 text-left">
          Education news all over the world.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <div key={post.slug} className="relative group">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />

              <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 w-3/5 z-20">
                <div className="bg-white text-[#2e528e] p-4 rounded-md shadow-lg h-32 group-hover:h-50 group-hover:bg-[#2e528e] group-hover:text-white transition-all duration-300 overflow-hidden">
                  <p className="text-sm mb-1">{post.date}</p>
                  <h4 className="font-semibold text-lg">{post.title}</h4>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm underline mt-2 inline-block group-hover:text-white"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
