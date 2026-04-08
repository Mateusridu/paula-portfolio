import './App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom'; // Remove BrowserRouter import
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

function App() {
    return (
        // Use HashRouter with a fixed basename for GitHub Pages deployment
        <HashRouter basename="/paula-portfolio/"> 
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> {/* Home route */}
                    <Route path="about" element={<About />} /> {/* About route */}
                    <Route path="contact" element={<Contact />} /> {/* Contact route */}
                </Route>
        </HashRouter>
    );
}

export default App;
