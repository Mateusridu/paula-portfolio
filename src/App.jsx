import './App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

function App() {

    const isProduction = process.env.NODE_ENV === 'production';

    return (
        
        <HashRouter basename={isProduction ? '/paula-portfolio' : '/'}> 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> 
                    <Route path="about" element={<About />} /> 
                    <Route path="contact" element={<Contact />} /> 
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
