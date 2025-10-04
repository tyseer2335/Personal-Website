import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section2 from '@/components/Section2';
import Spacer from '@/components/Spacer';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import ViewMore from '@/components/ViewMore';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Section2 />
        <Spacer layer={2} />
        <About />
        <Spacer layer={3} />
        <Portfolio />
        <Spacer layer={2} />
        <ViewMore />
        <Spacer layer={5} />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
