import Hero from "@/components/Hero";
import Courses from "@/components/courses";
import BlogPreview from '@/components/BlogPreview';
import Qualifications from "@/components/Qualifications";
import QualificationsGrid from "@/components/QualificationsGrid";
import QualificationStructure from "@/components/QualificationStructure";
{/*This website was built by Hannes Jansen van Rensburg */}

export default function Home() {
  return (
    <main className="bg-gray-400 !important">
      <Hero />
      <Courses />
      <Qualifications />
      <QualificationsGrid />
      <QualificationStructure />
      <BlogPreview />
    </main>
  );
}