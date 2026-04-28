import './App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Treatments from './components/treatments'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Layout />}>
                </Route>
            </Routes>
        </HashRouter>
    )
  
}

export default App
