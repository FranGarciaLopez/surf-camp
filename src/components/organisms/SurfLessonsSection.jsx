import LessonsCard from '../molecules/LessonsCard';

const lessonData = [
       {
              title: 'Beginner Lesson',
              description: 'Perfect for first-timers or those getting back on the board.',
              price: 49,
              features: [
                     'All equipment included',
                     'Beach theory & safety intro',
                     'Small group (max 5)',
                     '1.5 hours water time',
              ],
              buttonLabel: 'Start Surfing',
       },
       {
              title: 'Intermediate Session',
              description: 'Sharpen your technique and paddle into confidence.',
              price: 69,
              features: [
                     'Focus on turns & positioning',
                     'Video analysis included',
                     'Certified coach guidance',
                     '1.5 hours session',
              ],
       },
       {
              title: 'Private 1-on-1',
              description: 'Full focus on your skill level and goals.',
              price: 99,
              features: [
                     'Solo session with a pro',
                     'Customized progression plan',
                     'Free GoPro footage',
                     'Flexible time slots',
              ],
       },
];

const SurfLessonsSection = () => {
       return (
              <section id="surf-lessons">
                     <div className="mx-auto px-4 md:px-12 py-10">
                            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Surf Lessons</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                   {lessonData.map((lesson, index) => (
                                          <LessonsCard key={index} lesson={lesson} onClick={() => console.log(`Book ${lesson.title}`)} />
                                   ))}
                            </div>
                     </div>
              </section>
       );
};

export default SurfLessonsSection;
