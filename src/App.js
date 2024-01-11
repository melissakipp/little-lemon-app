import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

// Note: these selections are already have a layout of block, it is
// the nested components that need to have viewport changes

function App() {
  return (
    <>
   
      <Header />
      <main>
        <p>Sections</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
