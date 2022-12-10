import './Sidebar.css'
import SidebarMenu from './SidebarMenu/SidebarMenu'
import SidebarTitle from './SidebarTitle/SidebarTitle'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarTitle/>
        <SidebarMenu/>
    </div>
  )
}
