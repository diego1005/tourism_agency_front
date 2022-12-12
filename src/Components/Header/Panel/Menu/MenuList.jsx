import MenuBtn from "./MenuBtn";

export default function MenuList() {

    return (
        <ul className='menu'>
            <MenuBtn title={"Mi Perfil"} newView={"profile"}/>
            <MenuBtn title={"Cerrar Sesion"}/>
        </ul>
    )
}
