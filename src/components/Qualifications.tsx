export default function Qualifications() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Divider */}
        <div className="w-26 h-1 bg-blue-600 mx-auto mb-4"></div>

        {/* Primary Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Qualifications</h2>

        {/* Secondary Heading */} {/* Adjust Width to sentence fits one line*/}
        <h3 className="text-md text-gray-600 max-w-7xl mx-auto">
          <span className="bg-white px-2 py-1 rounded w-full">
            Water Business College (WBC) is an accredited Skills Development Provider (SDP) implementing occupational qualifications in the water and related engineering sectors.
          </span>
        </h3>
      </div>
    </section>
  );
}