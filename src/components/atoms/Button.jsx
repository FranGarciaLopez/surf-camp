const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-black flex items-center justify-center bg-white px-6 py-3 rounded-full mt-4 text-xl font-bold hover:bg-cyan-200 transition-colors duration-300"
  >
    {label}
  </button>
);

export default Button;
