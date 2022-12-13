import './SidebarOpt.css';
import { useState } from 'react';
import SidebarSubOpt from './SidebarSubOpt';
import { useHandleView } from '../../../../../Hooks/ViewHooks/useHandleView';

export default function SidebarOpt({ icon, opt, subOpt }) {

    const [menu, setMenu] = useState(false);
    const { handleView } = useHandleView();

    return (
        <div className='sidebar-opt-container'>
            <button className='sidebar-opt-btn'
                onClick={
                    subOpt
                        ? () => setMenu(preValue => !preValue)
                        : () => handleView(null, opt)
                }>
                <div className="sidebar-opt">
                    {opt}
                </div>
                <div className="sidebar-opt-icon">
                    {icon}
                </div>
            </button>
            {
                menu &&
                subOpt &&
                <div className="sidebar-opt-list">
                    <SidebarSubOpt list={subOpt} />
                </div>
            }
        </div>
    )
}
