
export default function MenuTitle({ title }) {
    return (
        <button className="menu-title">
            <p>
                <em>Hola </em><b>{title}</b><em> !</em>
            </p>
            <i className="fa-solid fa-angle-down"></i>
        </button>
    )
}
