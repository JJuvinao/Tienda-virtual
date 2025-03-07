import './styles.css';
import Prueba from './Prueba';

export default function Pagina() {
    return (
        <>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </>
    )
}

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Mi Tienda</h1>
        </header>
    )
}

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <link to="/">
                <li className="nav-item"><a href="#home">Categorias</a></li>
                </link>
                <link to="/carrito">
                <li className="nav-item"><a href="#products">Carrito de compra - prueba</a></li>
                </link>
                <link to="/estado">
                <li className="nav-item"><a href="#contact">Buscar- estado</a></li>
                </link>
            </ul>
        </nav>
    )
}

function Main() {
    return (
        <main className="main">
            <Prueba />
        </main>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">© 2025 Mi Tienda. Todos los derechos reservados.</p>
        </footer>
    )
}
