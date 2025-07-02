import { useParams, useNavigate } from "react-router-dom";

const CampImagePage = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();

  const images = [
    "https://images.pexels.com/photos/355885/pexels-photo-355885.jpeg",
    "https://images.pexels.com/photos/14751835/pexels-photo-14751835.jpeg",
    "https://images.pexels.com/photos/10872619/pexels-photo-10872619.jpeg",
    "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg",
    "https://images.pexels.com/photos/8691094/pexels-photo-8691094.jpeg",
    "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
    "https://images.pexels.com/photos/3025565/pexels-photo-3025565.jpeg",
    "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg",
    "https://images.pexels.com/photos/32762601/pexels-photo-32762601.jpeg",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg",
    "https://images.pexels.com/photos/32784582/pexels-photo-32784582.jpeg",
    "https://images.pexels.com/photos/2901542/pexels-photo-2901542.jpeg"
  ];

  const imageIndex = Number(imageId);
  const imageUrl = images[imageIndex];

  if (!imageUrl) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-900 p-6 text-white">
        <p className="text-xl mb-4">Image not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-900 to-blue-900 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-3 bg-cyan-700 hover:bg-cyan-800 rounded-lg text-white font-semibold shadow-lg transition-colors"
      >
        ← Back to Gallery
      </button>
      <div className="max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl border-4 border-cyan-700">
        <Image
          src={imageUrl}
          alt={`Camp Image ${imageIndex}`}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CampImagePage;
