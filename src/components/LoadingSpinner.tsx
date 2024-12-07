import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-4" role="status">
      <Loader2 className="animate-spin" size={24} />
    </div>
  );
};
