import "./Sidebar.css"
import SidebarOpt from './SidebarOpt/SidebarOpt';

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className="sidebar-title">
        <div className="title-box">
          {/* icon */}
          <h2 className='title-icon'>TITLE SIDEBAR</h2>
        </div>
        <hr />
      </div>
      <div className="sidebar-list-container">
        <ul className='sidebar-list'>
          <SidebarOpt sidebarOpt="ITEM1" sidebarIcon={<i className="fa-solid fa-chart-line"></i>} />
          <SidebarOpt sidebarOpt="ITEM2" sidebarIcon={<i className="fa-solid fa-cash-register"></i>} />
          <SidebarOpt sidebarOpt="ITEM3" sidebarIcon={<i className="fa-solid fa-user"></i>} />
          <SidebarOpt sidebarOpt="ITEM4" sidebarIcon={<i className="fa-solid fa-right-to-bracket"></i>} />
          <SidebarOpt sidebarOpt="ITEM5" sidebarIcon={<i className="fa-solid fa-right-to-bracket"></i>} />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar