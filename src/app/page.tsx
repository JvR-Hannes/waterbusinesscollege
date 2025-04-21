import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Courses from "@/components/courses";
import News from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Courses />
      <News />
    </main>
  );
}