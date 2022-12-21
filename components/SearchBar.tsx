import { useState } from 'react';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          className='border-4 rounded border-red-900 focus:border-transparent focus:ring focus:ring-violet-300'
        />
      </form>
    </div>
  );
};

export default SearchBar;
