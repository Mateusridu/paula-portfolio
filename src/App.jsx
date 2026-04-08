import './App.scss'
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

function App() {
    return (
        <HashRouter basename={import.meta.env.DEV ? '/paula-portfolio/' : '/'}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route index path="about" element={<About />} />
                <Route index path="contact" element={<Contact />} />
            </Route>
        </HashRouter>
    )
  
}

export default App
