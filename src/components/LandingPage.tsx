import { PokeBallIcon } from './icons/PokeBallIcon';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <div className="animate-bounce">
          <PokeBallIcon className="w-24 h-24 mx-auto text-white" />
        </div>
        <h1 className="text-5xl font-bold text-white">Welcome to Pokédex</h1>
        <p className="text-xl text-white/90">
          Explore the world of Pokémon with our interactive Pokédex. 
          Discover details about your favorite Pokémon!
        </p>
        <button
          onClick={onStart}
          className="bg-white text-red-600 px-8 py-4 rounded-full text-xl font-bold 
                   transform transition-all hover:scale-105 hover:shadow-lg
                   focus:outline-none focus:ring-4 focus:ring-white/50"
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
};
