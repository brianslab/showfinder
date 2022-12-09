import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import searchTMDB from '../api/tmdb';

export default function Home() {
  const handleSubmit = (term: string) => {
    searchTMDB(term);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div>
        <Button primary outline rounded>
          Custom Button
        </Button>
        <SearchBar onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
