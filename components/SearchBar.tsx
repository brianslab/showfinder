import { useState } from 'react';

interface SearchBarProps {
  onSubmit: (value: string) => void;
  title?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
  title,
  className,
}) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div className={className}>
      <form onSubmit={handleFormSubmit}>
        <h3 className='text-2xl text-white font-bold font-mono'>{title}</h3>
        <div className={className}>
          <input
            value={term}
            onChange={handleChange}
            className='border-4 rounded border-red-900 focus:border-transparent focus:ring focus:ring-violet-300'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
