import { useEffect, useRef } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Treatments from '../treatments'
import Contact from '../contact'
import './index.scss'
import Sidebar from '../sidebar'

const SECTIONS = [
    { path: '/',            id: 'home',       Component: Home       },
    { path: '/about',       id: 'about',      Component: About      },
    { path: '/treatments',  id: 'treatments', Component: Treatments },
    { path: '/contact',     id: 'contact',    Component: Contact    },
]

export default function Layout() {
    const navigate  = useNavigate()
    const location  = useLocation()
    const containerRef = useRef(null)
    const sectionRefs  = useRef({})        // { id: elemento DOM }
    const isScrollingTo = useRef(false)    // evita loop observer ↔ navigate

    // 1. Quando a URL muda (clique na navbar), rola até a seção correspondente
    useEffect(() => {
        const path    = location.pathname
        const section = SECTIONS.find(s => s.path === path)
        if (!section) return

        const el = sectionRefs.current[section.id]
        if (!el) return

        isScrollingTo.current = true
        el.scrollIntoView({ behavior: 'smooth' })

        // Libera o observer depois que o scroll termina (~700 ms)
        const timer = setTimeout(() => { isScrollingTo.current = false }, 800)
        return () => clearTimeout(timer)
    }, [location.pathname])

    // 2. IntersectionObserver: atualiza a URL conforme o scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrollingTo.current) return   // não interfere no scroll programático

                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = SECTIONS.find(s => s.id === entry.target.id)
                        if (section && location.pathname !== section.path) {
                            navigate(section.path, { replace: true })
                        }
                    }
                })
            },
            {
                root: containerRef.current,
                rootMargin: '0px',
                threshold: 0.5,             // seção precisa estar 50% visível
            }
        )

        SECTIONS.forEach(({ id }) => {
            const el = sectionRefs.current[id]
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [navigate, location.pathname])

    return (
        <div className="page" ref={containerRef}>
            <Sidebar />

            <div className="container">
                {SECTIONS.map(({ id, Component }) => (
                    <section
                        key={id}
                        id={id}
                        ref={el => { sectionRefs.current[id] = el }}
                        className={`${id}-page`}
                    >
                        <Component />
                    </section>
                ))}
            </div>
        </div>
    )
}