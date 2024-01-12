import './App.css';
import './main/main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './main/About';
import Hero from './main/Hero';
import { Highlights } from './main/Highlights';
// import Highlights from './components/main/Highlights';
import Testimonials from './main/Testimonials';

// Note: these selections are already have a layout of block, it is
// the nested components that need to have viewport changes

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <article>
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
