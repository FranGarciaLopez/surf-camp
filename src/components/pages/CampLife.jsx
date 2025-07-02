import { Routes, Route } from "react-router-dom";
import CampGallery from '/src/components/molecules/CampGallery.jsx';
import CampImagePage from '/src/components/pages/CampImagePage.jsx';  // adjust the path accordingly
import Testimonials from "../molecules/Testimonials";

const CampLife = () => {
  // You can pass your real images here or manage state/fetch if you want
  const images = [
    
  ];

  return (
    <div className="camp-life">
      <Routes>
        {/* Route to gallery */}
        <Route path="/" element={<CampGallery camp={{ images }} />} />
        {/* Route to individual image page */}
        <Route path="camp/:imageId" element={<CampImagePage images={images} />} />
      </Routes>
      <Testimonials />
    </div>
  );
};

export default CampLife;
