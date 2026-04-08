import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';

function Layout() {
    return (
        <div className="App">
            {/* Navigation Links */}
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Main page layout with Sidebar and Content */}
            <div className="page">
                <Sidebar />
                <main className="content">
                    {/* This is where the matched route will render */}
                    <Outlet />
                </main>
            </div>

            {/* Footer or Tags */}
            <div className="tags-container">
                <span className="tags top-tags">
                    Saúde
                    <br />
                    <span className="top-tag-html">Bem Estar</span>
                </span>

                <span className="tags bottom-tags">
                    Saúde
                    <br />
                    <span className="bottom-tag-html">Bem Estar</span>
                </span>
            </div>
        </div>
    );
}

export default Layout;