import './App.css';
import './pages/main/main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/main/About';
import Hero from './pages/main/Hero';
import Highlights from './pages/main/Highlights';
// import Highlights from './components/main/Highlights';
import Testimonials from './pages/main/Testimonials';

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
