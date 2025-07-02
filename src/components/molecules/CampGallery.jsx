import React from "react";
import '/src/App.css'
import Image from '../atoms/Image.jsx'

const CampGallery = () => {
       const images = [
              "https://images.pexels.com/photos/355885/pexels-photo-355885.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/14751835/pexels-photo-14751835.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/10872619/pexels-photo-10872619.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/8691094/pexels-photo-8691094.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/3025565/pexels-photo-3025565.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/32762601/pexels-photo-32762601.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/32784582/pexels-photo-32784582.jpeg?auto=compress&cs=tinysrgb&h=400",
              "https://images.pexels.com/photos/2901542/pexels-photo-2901542.jpeg?auto=compress&cs=tinysrgb&h=400"
       ];

       const columns = 4;
       const columnWrapper = Array.from({ length: columns }, () => []);
       images.forEach((img, index) => {
              columnWrapper[index % columns].push({ img, index });
       });


       return (
              <section
                     className="px-4 md:px-12 py-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white  shadow-lg"
              >
                     <h2>
                            Camp Life Moments
                     </h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {columnWrapper.map((column, colIndex) => (
                                   <div key={colIndex} className="flex flex-col gap-4">
                                          {column.map(({ img, index }) => (
                                                        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300
                                                        gallery-image" key={index}>
                                                               <Image
                                                                      src={img}
                                                                      alt={`Camp Image ${index}`}
                                                                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                                                      loading="lazy"
                                                                      draggable="false"
                                                               />
                                                        </div>
                                          ))}
                                   </div>
                            ))}

                     </div>
              </section>
       );
};

export default CampGallery;
