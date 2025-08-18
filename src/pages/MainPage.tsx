import Footer from '../components/Footer';
import MainIntro from '../sections/MainIntro';
import PortfolioGrid from '../sections/PortfolioGrid';
import TodoSection from '../todos/TodoSection';

const MainPage = () => {
  return (
    <main className="flex-grow">
      <MainIntro />
      <PortfolioGrid />
      <TodoSection />
    </main>
  );
};

export default MainPage;
