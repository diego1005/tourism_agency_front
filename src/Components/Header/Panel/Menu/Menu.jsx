import { useState, useContext } from 'react';
import { AppContext } from '../../../../Context/context';
import './Menu.css';
import MenuList from './MenuList';
import MenuTitle from './MenuTitle';

export default function UserMenu() {

    const [userMenu, setUserMenu] = useState(false);
    const { userLogged } = useContext(AppContext);

    const { name, lastname } = userLogged;

    return (
        <div className='menu-container'>
            <MenuTitle title={`${name} ${lastname}`} userMenu={setUserMenu} />
            {
                userMenu &&
                <MenuList />
            }
        </div>
    )
}
