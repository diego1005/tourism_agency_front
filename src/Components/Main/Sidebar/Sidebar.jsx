import { useContext } from 'react';
import { AppContext } from '../../../Context/context';
import UiButton from '../../UI/UiButton/UiButton';

import './Sidebar.css';
import SidebarItem from './SidebarMenu/SidebarOpt/SidebarItem';
import SidebarSubItem from './SidebarMenu/SidebarOpt/SidebarSubItem';

export default function Sidebar() {
  const { userLogged } = useContext(AppContext);

  return (
    <div className='sidebar'>
        <div className='sidebar-title'>
            <i className="fa-solid fa-bars"></i>
        </div>
        <>
          {
            userLogged ? 
              <div className='sidebar-container'>
                <div className='sidebar-menu'>
                  <SidebarItem icon={"fa-house"} item={"Inicio"} />

                  <SidebarItem icon={"fa-graduation-cap"} item={"Estudiantes"}>
                    <div className="sidebar-opt-list">
                      <SidebarSubItem title={"Nuevo"} view={"new-student"}/>
                      <SidebarSubItem title={"Listar"} view={"students-list"}/>
                    </div>
                  </SidebarItem>

                  <SidebarItem icon={"fa-person"} item={"Contratos Personales"}>
                    <div className="sidebar-opt-list">
                      <SidebarSubItem title={"Nuevo"} view={"individual"}/>
                      <SidebarSubItem title={"Listar"} view={"individual-list"}/>
                    </div>
                  </SidebarItem>

                  <SidebarItem icon={"fa-person-walking-luggage"} item={"Contratos Viajes"}>
                    <div className="sidebar-opt-list">
                      <SidebarSubItem title={"Nuevo"} view={"general"}/>
                      <SidebarSubItem title={"Listar"} view={"general-list"}/>
                      <SidebarSubItem title={"Destinos"} view={"destinations"}/>
                    </div>
                  </SidebarItem>

                  <SidebarItem icon={"fa-cash-register"} item={"Caja"} />

                  <SidebarItem icon={"fa-sliders"} item={"Ajustes"} />
                </div>
                  <UiButton icon={"fa-sliders"} action={"Cerrar sesión"}/>
              </div>
              :
              <i className="fa-solid fa-right-to-bracket">
                  <em> Por favor inicia sesion</em>
              </i>
            }
        </>
    </div>
  )
}
