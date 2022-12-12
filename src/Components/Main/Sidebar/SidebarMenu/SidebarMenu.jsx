import './SidebarMenu.css'
import SidebarOpt from './SidebarOpt/SidebarOpt';
import { sidebarOptions } from '../../../../Common/Sidebar/SidebarOptions';

export default function SidebarMenu() {
    return (
        <div className='sidebar-menu'>
            {
                sidebarOptions.map(({ icon, option }, idx) =>
                    <SidebarOpt
                        key={idx}
                        icon={icon}
                        opt={option}
                    />
                )
            }
        </div>
    )
}
