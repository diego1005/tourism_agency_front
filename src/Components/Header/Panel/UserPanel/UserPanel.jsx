import { useState, useContext } from 'react';
import { AppContext } from '../../../../Context/context';
import './UserPanel.css';
import MenuList from './MenuList';
import MenuTitle from './MenuTitle';
import { userMenuList } from '../../../../Common/UserMenu/userMenuList';


export default function UserPanel() {

    const [userMenu, setUserMenu] = useState(false);
    const { userLogged } = useContext(AppContext);

    const { firstname, lastname } = userLogged;

    const handleShow = ({ type }) => {
        if (type === "mouseover") setUserMenu(true);
        if (type === "mouseout") setUserMenu(false);
    }

    return (
        <div className='menu-container' onMouseOver={handleShow} onMouseOut={handleShow}>
            <MenuTitle title={`${firstname} ${lastname}`} />
            {
                userMenu &&
                <MenuList list={userMenuList} />
            }
        </div>
    )
}
