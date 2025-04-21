import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">About Water Business College</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Water Business College</strong> is a leading institution dedicated to providing top-quality training in the water sector.<br/>
          Our mission is to empower individuals with practical skills and knowledge for sustainable water management.
        </p>
        {/* Add more info, team sections, images etc. */}
      </section>
    </main>
  );
}