import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Menu from './pages/menu/Menu';
import Reservation from './pages/reservation/Reservation';
import OrderOnline from './pages/orderOnline/OrderOnline';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';


// Note: these selections are already have a layout of block, it is
// the nested components that need to have viewport changes

function App({ content }) {
  return (
    <>
      <Header />
      {content}
      <Routes>
        <Route path="/" element={<Main /> } /> {/* 👈 Renders at /app/ */}
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
