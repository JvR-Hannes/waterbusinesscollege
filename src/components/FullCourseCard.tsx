type Course = {
  title: string;
  image: string;
  price?: string;
  link?: string;
};

export default function FullCourseCard({ title, image, price, link }: Course) {
  return (
    <div className="w-full max-w-sm mx-auto border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-center text-gray-800 mt-4">{title}</h3>
      {price && (
        <div className="mt-4 text-center text-gray-600">
          <span className="block">Price</span>
          <span className="font-bold">{price}</span>
        </div>
      )}
      {link && (
        <div className="mt-4 flex justify-center">
          <a
            href={link}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            PURCHASE
          </a>
        </div>
      )}
    </div>
  );
}
