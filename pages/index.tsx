import ShowFinder from '../components/ShowFinder';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl text-white font-bold font-mono flex place-content-center'>
        Show Finder
      </h1>
      <div className='text-white font-bold font-mono flex place-content-center'>
        powered by
        <div className='w-10 h-10'>
          <a href='https://www.themoviedb.org/' target='_blank'>
            <img src='tmdb.svg' alt='tmdb' />
          </a>
        </div>
      </div>
      <ShowFinder />
    </div>
  );
}
