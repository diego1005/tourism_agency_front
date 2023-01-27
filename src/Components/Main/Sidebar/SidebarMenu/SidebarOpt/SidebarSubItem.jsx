import { useHandleView } from "../../../../../Hooks/ViewHooks/useHandleView"

export default function SidebarSubItem({ view, title }) {

    const { handleView } = useHandleView()
    return (
        <div className="sidebar-sub-opt-container">
            <ul>
                 <li className="sidebar-sub-opt" onClick={() => handleView(null, view)}>{title}</li>
            </ul>
        </div>
    )
}
