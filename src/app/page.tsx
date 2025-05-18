import Hero from "@/components/Hero";
import Courses from "@/components/courses";
import News from "@/components/News";
import BlogPreview from '@/components/BlogPreview';

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Courses />
      <BlogPreview />
    </main>
  );
}