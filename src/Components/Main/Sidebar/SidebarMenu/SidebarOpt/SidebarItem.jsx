import './SidebarItem.css';
import { useState } from 'react';
import { useHandleView } from '../../../../../Hooks/ViewHooks/useHandleView';

export default function SidebarItem({ icon, item, children }) {
    const [menu, setMenu] = useState(false);
    const { handleView } = useHandleView();

    return (
        <div className='sidebar-opt-container'>
            <button className='sidebar-opt-btn'
                onClick={
                    children
                        ? () => setMenu(preValue => !preValue)
                        : () => handleView(null, item)
                }
                >
                <div className="sidebar-opt-icon">
                    <i className={`fa-solid ${icon}`}></i>
                </div>
                <div className="sidebar-opt">
                    {item}
                </div>
            </button>
            {
                menu &&
                children
            }
        </div>
    )
}
