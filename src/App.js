import './App.css';
import './components/main/main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/main/About';
import Hero from './components/main/Hero';
import { Highlights } from './components/main/Highlights';
// import Highlights from './components/main/Highlights';
import Testimonials from './components/main/Testimonials';

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
