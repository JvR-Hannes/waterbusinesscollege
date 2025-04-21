const testimonials = [
    {
      quote:
        "Water Business College gave me the tools to launch my own purification company.",
      name: "Thabo M.",
    },
    {
      quote:
        "The hands-on training and support from instructors is unmatched. Highly recommended!",
      name: "Precious D.",
    },
    {
      quote:
        "Their courses are well-structured and made me confident about starting my water business.",
      name: "Mandla K.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <p className="font-semibold text-blue-800">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }