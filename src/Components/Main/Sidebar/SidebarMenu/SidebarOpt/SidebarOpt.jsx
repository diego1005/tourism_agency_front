import { useHandleView } from '../../../../../Hooks/ViewHooks/useHandleView';
import './SidebarOpt.css';

export default function SidebarOpt({ icon, opt }) {

    const { handleView } = useHandleView();

    return (
        <div className='sidebar-opt-container'>
            <button className='sidebar-opt-btn' onClick={e => handleView(e, opt)}>
                <div className="sidebar-opt">
                    {opt}
                </div>
                <div className="sidebar-opt-icon">
                    {icon}
                </div>
            </button>
        </div>
    )
}
