import { useContext } from 'react';
import './SidebarMenu.css'
import SidebarOpt from './SidebarOpt/SidebarOpt';
import { sidebarOptions } from '../../../../Common/Sidebar/SidebarOptions';
import { AppContext } from '../../../../Context/context';

export default function SidebarMenu() {

    const { userLogged } = useContext(AppContext);

    return (
        <div className='sidebar-menu'>
            {
                userLogged
                ? sidebarOptions.map(({ icon, option, subOptions }, idx) =>
                    <SidebarOpt
                        key={idx}
                        icon={icon}
                        opt={option}
                        subOpt={subOptions}
                    />
                )
                : <i className="fa-solid fa-right-to-bracket">
                    <em> Por favor inicia sesion</em>
                </i>
            }
        </div>
    )
}
