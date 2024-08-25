import { FiDownload } from "react-icons/fi";

const PrimaryButton: React.FC = () => {
  return (
    <a href="/YashithaSahan.pdf" download>
      <button className="bg-green-600 bg-opacity-30 border-2 text-sm sm:text-base border-green-600  text-green-600 px-5 py-2 rounded-lg hover:bg-green-400 dark:hover:bg-green-500 dark:hover:text-white transition-colors duration-300">
        Resume
        <FiDownload className="inline-block ml-2" />
      </button>
    </a>
  );
};

export default PrimaryButton;
