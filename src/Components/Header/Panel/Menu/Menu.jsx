import { useState } from 'react';
import './Menu.css';
import MenuList from './MenuList';
import MenuTitle from './MenuTitle';

export default function UserMenu() {

    const [userMenu, setUserMenu] = useState(false);

    return (
        <div className='menu-container'>
            <MenuTitle title={"usuario"} userMenu={setUserMenu} />
            {
                userMenu &&
                <MenuList/>
            }
        </div>
    )
}
