import logo from '../img/logo.png';
import '../styles/menu.css'

const Menu = () => {

    const navElements = ['O mnie', 'Oferta', 'Projekty', 'Kontakt'];
    const projects = ['projekt1', 'projekt2', 'projekt3', 'projekt4',]


    return (
        <>

            <header className="sticky-top">

                {/* Sekcja 1: logo, menu. Menu ma mieć właściwość „sticky”. Menu ma przełączać się na „offcanvas” (2) */}

                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

                    <div className="container">

                        <a href="#" className="logo navbar-brand">
                            <img src={logo} alt="logo" className="d-inline-block mr-2" />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#mainMenu"
                            aria-controls="mainMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="mainMenu">

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Start</a>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-expanded="false" id="submenu" aria-haspopup="true">Projekty</a>

                                    <div class="dropdown-menu" aria-labelledby="submenu">
                                        <a href="#" class="dropdown-item">Projekt1</a>
                                        <a href="#" class="dropdown-item">Projekt2</a>
                                        <a href="#" class="dropdown-item">Projekt3</a>
                                        <a href="#" class="dropdown-item">Projekt4</a>
                                    </div>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link">O mnie</a>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link">Kontakt</a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>

            </header>


        </>
    );
}

export default Menu;