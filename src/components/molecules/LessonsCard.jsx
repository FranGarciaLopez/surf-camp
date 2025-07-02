import Button from '../atoms/Button';
import Subtitle from '../atoms/Subtitle';
import Text from '../atoms/Text';

const LessonsCard = ({ lesson, onClick }) => {
       return (
              <div className="relative group bg-gray-800/60 border border-cyan-500 rounded-3xl p-6 shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:scale-[1.03] hover:border-cyan-400">

                     <div className="absolute -inset-px rounded-3xl bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />

                     <h3 className="text-2xl font-bold text-cyan-200 mb-2">{lesson.title}</h3>

                     <Text className="text-gray-300 mb-4">{lesson.description}</Text>

                     <div className="text-4xl font-extrabold text-white mb-6">${lesson.price}</div>

                     <ul className="text-xl text-gray-300 space-y-2 mb-6 text-left mx-auto w-fit">
                            {lesson.features.map((feature, index) => (
                                   <li key={index} className="flex items-center gap-2">
                                          <span className="text-cyan-400">✔</span>
                                          {feature}
                                   </li>
                            ))}
                     </ul>

                     <Button label={lesson.buttonLabel || 'Book now'} onClick={onClick} />
              </div>
       );
};

export default LessonsCard;
