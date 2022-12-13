import { useHandleView } from "../../../../../Hooks/ViewHooks/useHandleView"

export default function SidebarSubOpt({ list }) {

    const { handleView } = useHandleView()

    return (
        <div className="sidebar-sub-opt-container">
            <ul>
                {
                    list.map(({ title, newView }, idx) =>
                        <li
                            key={idx}
                            onClick={() => handleView(null, newView)}
                        >{title}</li>)
                }
            </ul>
        </div>
    )
}
