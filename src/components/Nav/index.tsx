import { Link } from "react-router-dom";

export function Nav() {

    const PATH_NAME = window.location.pathname;

    return (
        <nav className="mt-4 w-full cursor-pointer">
        <ul className="w-full flex items-center flex-wrap gap-6 text-[#B7B7B7]">
            <Link to="/">
                <li className={`hover:text-violet-500 ${PATH_NAME === '/' && 'text-violet-500'}`}>Sobre</li>
            </Link>
            <Link to="/blog">
                <li className={`hover:text-violet-500 ${PATH_NAME  === '/blog' && 'text-violet-500'}`}>Blog</li>
            </Link>
            <Link to="/experiencia">
                <li className={`hover:text-violet-500 ${PATH_NAME  === '/experiencia' && 'text-violet-500'}`}>Experiência</li>
            </Link>
            <Link to="/projetos">
                <li className={`hover:text-violet-500 ${PATH_NAME  === '/projetos' && 'text-violet-500'}`}>Projetos</li>
            </Link>
            <Link to="/tecnologias">
                <li className={`hover:text-violet-500 ${PATH_NAME  === '/tecnologias' && 'text-violet-500'}`}>Tecnologias</li>
            </Link>
            <Link to="/contato">
                <li className={`hover:text-violet-500 ${PATH_NAME  === '/contato' && 'text-violet-500'}`}>Contato</li>
            </Link>
        </ul>
    </nav>
    )
}