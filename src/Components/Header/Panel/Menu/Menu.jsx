import { useState } from 'react';
import './Menu.css';

export default function UserMenu({ name = "usuario" }) {

    const [userMenu, setUserMenu] = useState(false);

    return (
        <div className='menu-container'>
            {/*the next button and ul can be a component to be reused in another site*/}
            <button className="menu-title" onClick={() => setUserMenu(preValue => !preValue)}>
                <p>
                    <em>Hola </em><b>{name}</b><em> !</em>
                </p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            {
                userMenu &&
                <ul className='menu'>
                    <li>
                        <button className='menu-btn'>Mi Perfil</button>
                    </li>
                    <li>
                        <button className='menu-btn'>Cerrar Sesion</button>
                    </li>
                </ul>
            }
        </div>
    )
}
