import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/acerca">Acerca de</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;