import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return ( 
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'> Saúde</span>

                <Outlet />

                <span className='tags bottom-tags'>Saúde
                <br />
                <span className='bottom-tag-html'> Bem Estar</span>
                </span>
            </div>
        </ div>
    )
}

export default Layout