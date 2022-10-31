import './App.css';
import Browse from './pages/Browse';
import Converge from './pages/Converge';
import CreateAccount from './pages/CreateAccount';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Navbar1 from './pages/Navbar1';
import Services from './pages/Services';
import { useEffect, useState } from "react";




function App() {

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar1 scroll={scroll}/>
      {/* <Navbar /> */}
      <Converge />
      <Services />
      <CreateAccount />
      <Browse />
      <Footer />
    </div>
  );
}

export default App;
