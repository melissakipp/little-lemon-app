import './main.css';

import About from '../../components/main/About';
import Hero from '../../components/main/Hero';
import Highlights from '../../components/main/Highlights';
import Testimonials from '../../components/main/Testimonials';

function Main() {
    return (
        <main className="App">
            <article>
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
            </article>
        </main>
    );
}

export default Main;
