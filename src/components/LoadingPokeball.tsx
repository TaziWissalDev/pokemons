
type LoadingPokeballProps = {
  className?: string;
};

export const LoadingPokeball = ({ className = "w-16 h-16" }: LoadingPokeballProps) => {
  const combinedClassName = `${className} animate-spin`;

  return (
    <div className={combinedClassName}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" className="opacity-20" />
        <path
          d="M50 5A45 45 0 0 1 95 50"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
