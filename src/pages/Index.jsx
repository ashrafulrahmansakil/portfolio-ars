import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { ThemeContext } from './../context/ThemeContenxt';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';

export default function Index() {
    return (
        <>
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div className={theme ? " bg-gradient-to-b from-[#071024] via-[#0b1220] to-[#0b0f1b] text-slate-100" : "bg-white text-slate-900 "}>
                        <Header />
                        <div className='max-w-6xl mx-auto'>
                            <Hero />
                            <About />
                            <Projects />
                            <Skills />
                            <Experience />
                            <Education />
                            <Contact />
                        </div>
                        <Footer />
                    </div>
                )}
            </ThemeContext.Consumer>
        </>

    )
}
