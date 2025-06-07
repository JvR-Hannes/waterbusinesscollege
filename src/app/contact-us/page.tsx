export default function ContactUsPage() {
  return (
    <main className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <section className="text-center md:text-left">
          <h2 className="text-6xl font-bold text-[#2e528e] mb-6">
            Contact Us
          </h2>
          <div className="text-gray-700 space-y-4 text-xl leading-relaxed">
            <p>
              Office H4, The Willows Office Park,<br />
              559 Farm Road, Die Wilgers, Pretoria, 0181
            </p>
            <p>Tel: +27 (0)81 727 9793</p>
            <p>
              Email:{' '}
              <a
                href="mailto:contactus@waterbusinesscollege.co.za"
                className="text-blue-600 hover:underline"
              >
                contactus@waterbusinesscollege.co.za
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
