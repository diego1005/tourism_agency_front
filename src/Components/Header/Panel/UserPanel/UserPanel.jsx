import { useState, useContext } from 'react';
import { AppContext } from '../../../../Context/context';
import './UserPanel.css';
import MenuList from './MenuList';
import MenuTitle from './MenuTitle';
import { userMenuList } from '../../../../Common/UserMenu/userMenuList';


export default function UserPanel() {

    const [userMenu, setUserMenu] = useState(false);
    const { userLogged } = useContext(AppContext);

    const { name, lastname } = userLogged;

    return (
        <div className='menu-container'>
            <MenuTitle title={`${name} ${lastname}`} userMenu={setUserMenu} />
            {
                userMenu &&
                <MenuList list={userMenuList} />
            }
        </div>
    )
}
