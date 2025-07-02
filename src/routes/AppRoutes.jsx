import { Routes, Route } from "react-router-dom";
import CampGallery from '/src/components/molecules/CampGallery.jsx';
import CampImagePage from '/src/components/pages/CampImagePage.jsx';

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

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CampGallery images={images} />} />
    <Route path="camp/:imageId" element={<CampImagePage images={images} />} />
  </Routes>
);

export default AppRoutes;
