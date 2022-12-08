import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div>
        <Button primary outline rounded>
          Custom Button
        </Button>
      </div>
    </div>
  );
}
