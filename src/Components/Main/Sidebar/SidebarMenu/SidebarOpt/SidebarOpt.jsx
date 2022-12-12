import { useHandleView } from '../../../../../Hooks/ViewHooks/useHandleView';
import './SidebarOpt.css';

export default function SidebarOpt({ icon, opt }) {

    const { handleView } = useHandleView();

    return (
        <button className='sidebar-opt-container' onClick={e => handleView(e, opt)}>
            <div className="sidebar-opt">
                {opt}
            </div>
            <div className="sidebar-opt-icon">
                {icon}
            </div>
        </button>
    )
}
