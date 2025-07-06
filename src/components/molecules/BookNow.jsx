import React, { useState } from 'react';
import Subtitle from '../atoms/Subtitle';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from '../atoms/Image'; // Your custom Image component

const BookNow = () => {
       const [formData, setFormData] = useState({
              name: '',
              email: '',
              lessonType: 'Single Lesson',
              date: '',
              message: '',
       });

       const handleChange = (e) => {
              const { name, value } = e.target;
              setFormData((prev) => ({ ...prev, [name]: value }));
       };

       const handleSubmit = (e) => {
              e.preventDefault();
              console.log('Booking submitted:', formData);
              alert('Thank you for your booking!');
       };

       return (
              <section className="relative text-white py-40 px-4 md:px-10 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/image.jpg')" }}>
                     {/* Dark overlay */}
                     <div className="absolute inset-0 bg-black/60 z-0" />

                     {/* Content */}
                     <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left */}
                            <div className="space-y-6">
                                   <Subtitle>Book Your Surf Lesson</Subtitle>
                                   <Text className="text-lg text-gray-200 max-w-md">
                                          Whether you're catching your first wave or refining your skills, we’ve got the perfect session for you.
                                   </Text>
                                   <ul className="text-base text-gray-300 space-y-3">
                                          {['All gear included', 'Small group sizes', 'Certified instructors', 'Beachfront location'].map(item => (
                                                 <li key={item} className="flex items-center gap-2">
                                                        <span className="text-cyan-400">✔</span> {item}
                                                 </li>
                                          ))}
                                   </ul>
                            </div>

                            {/* Right Form */}
                            <form
                                   onSubmit={handleSubmit}
                                   className="w-full max-w-md bg-white text-gray-900 p-8 rounded-2xl shadow-2xl space-y-6"
                            >
                                   <h3 className="text-xl font-semibold text-gray-800 mb-2">Reserve Your Spot</h3>

                                   {[
                                          { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                                          { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
                                          { label: 'Preferred Date', name: 'date', type: 'date', placeholder: '' },
                                   ].map(({ label, name, type, placeholder }) => (
                                          <div key={name}>
                                                 <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                                                 <input
                                                        type={type}
                                                        name={name}
                                                        required
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                        placeholder={placeholder}
                                                        value={formData[name]}
                                                        onChange={handleChange}
                                                 />
                                          </div>
                                   ))}

                                   {/* Lesson Type */}
                                   <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Type</label>
                                          <select
                                                 name="lessonType"
                                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                 value={formData.lessonType}
                                                 onChange={handleChange}
                                          >
                                                 <option>Single Lesson</option>
                                                 <option>Group Session</option>
                                                 <option>Private Lesson</option>
                                          </select>
                                   </div>

                                   {/* Message */}
                                   <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                          <textarea
                                                 name="message"
                                                 rows="4"
                                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                 placeholder="Any special requests?"
                                                 value={formData.message}
                                                 onChange={handleChange}
                                          />
                                   </div>

                                   <Button type="submit" label="Confirm Booking" />
                            </form>
                     </div>
              </section>
       );
};

export default BookNow;
