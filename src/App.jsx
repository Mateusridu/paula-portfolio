import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

function App() {
    return (
        <BrowserRouter basename={import.meta.env.DEV ? '/' : '/paula-portfolio/'}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route index path="about" element={<About />} />
                <Route index path="contact" element={<Contact />} />
            </Route>
        </BrowserRouter>
    )
  
}

export default App
