
export default function MenuTitle({ title, userMenu }) {
    return (
        <button className="menu-title" onClick={() => userMenu(preValue => !preValue)}>
            <p>
                <em>Hola </em><b>{title}</b><em> !</em>
            </p>
            <i className="fa-solid fa-angle-down"></i>
        </button>
    )
}
