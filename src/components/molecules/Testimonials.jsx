import React from "react";
import Subtitle from "../atoms/Subtitle";
import Text from "../atoms/Text";
import Image from "../atoms/Image";

const testimonialsData = [
       {
              id: 1,
              name: "Alice Johnson",
              role: "Camp Enthusiast",
              photo: "https://randomuser.me/api/portraits/women/65.jpg",
              quote:
                     "The camp experience was life-changing! The scenery, the people, everything was perfect.",
       },
       {
              id: 2,
              name: "Mark Thompson",
              role: "Outdoor Explorer",
              photo: "https://randomuser.me/api/portraits/men/43.jpg",
              quote:
                     "I loved the adventures and meeting new friends. Can’t wait to come back next year!",
       },
       {
              id: 3,
              name: "Sophia Lee",
              role: "Nature Lover",
              photo: "https://randomuser.me/api/portraits/women/44.jpg",
              quote:
                     "Truly a peaceful getaway surrounded by nature. The best escape from city life.",
       },
];

const Testimonials = () => {
       return (
              <section className="bg-gray-900 py-16 px-4 md:px-12 text-white">
                     <Subtitle>What Our Campers Say</Subtitle>

                     <div className="mx-auto grid gap-10 md:grid-cols-3">
                            {testimonialsData.map(({ id, name, role, photo, quote }) => (
                                   <div
                                          key={id}
                                          className="relative group bg-gray-800 bg-opacity-60 backdrop-blur-md border border-gray-700 hover:border border-cyan-500 rounded-3xl p-6 shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:scale-[1.03] hover:border-cyan-400"
                                   >
                                          {/* Hover glow */}
                                          <div className="absolute -inset-px rounded-3xl bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />

                                          <Image
                                                 src={photo}
                                                 alt={`${name}'s photo`}
                                                 className="w-20 h-20 rounded-full mb-4 object-cover shadow-md border-4 border-cyan-500 mx-auto"
                                                 loading="lazy"
                                          />

                                          <Text className="text-gray-300 italic mb-4 text-center">"{quote}"</Text>
                                          <h3 className="text-xl font-bold text-cyan-200 text-center">{name}</h3>
                                          <span className="block text-sm text-gray-400 text-center">{role}</span>
                                   </div>
                            ))}
                     </div>
              </section>
       );
};

export default Testimonials;
