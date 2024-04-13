import { useEffect, useState } from 'react';
import NavBar from "@/components/navbar";
import { SelectedPage } from '@/utils/types';
import Home from '@/components/home';
import Benefits from '@/components/benefits';
import OurClasses from '@/components/classes';
import ContactUs from '@/components/contact-us';
import Footer from '@/components/footer';




const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage?.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) {
      setIsTopOfPage(false);
    }
  }
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
  return (
    <div className="app  bg-gray-20">
      <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App