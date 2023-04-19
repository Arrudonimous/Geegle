import HomeButtons from '../../pages-componentes/HomeButtons';
import HomeHeader from '../../pages-componentes/HomeHeader';

export default function Home() {
  return (
    <div className='bg-GeegleBg w-[100vw] h-[100vh] pt-24'>
      <HomeHeader />
      <HomeButtons />
    </div>
  );
}
