import { useEffect, useContext, useState } from 'react';
import Login from '../../../Pages/Login/Login';
import './MainSection.css';
import { AppContext, EditContext, ViewContext } from '../../../Context/context';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import NewStudent from '../../../Pages/NewStudent/NewStudent';
import NewContract from '../../../Pages/NewContract/NewContract';
import ListStudentsData from '../../../Pages/ListStudentsData/ListStudentsData';
import { studentListData, individualListData, generalListData } from '../../../Common/List';
import NewDestination from '../../../Pages/NewDestination/NewDestination';
import EditData from '../../../Pages/EditData/EditData';

export default function MainSection() {

  const [editData, setEditData] = useState([]);

  const { userLogged, userIsLogged } = useContext(AppContext);
  const { view } = useContext(ViewContext);

  useEffect(() => {
    userIsLogged();
    switchViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  let views = {
    "new-student": <NewStudent />,
    "individual": <NewContract />,
    "general": <NewContract />,
    "students-list": <ListStudentsData listData={studentListData} />,
    //agregar nuevas vistas (individual-list, general-list)
    // "individual-list": <ListData listData={individualListData} />,
    // "general-list": <ListData listData={generalListData} />,
    "destinations": <NewDestination />,
    "edit-form": <EditData editData={editData} />
  }

  const switchViews = () => {
    return views[view] ? views[view] : <Dashboard />
  }

  return (
    <EditContext.Provider value={{ setEditData }}>
      <div className='main-section'>
        {
          !userLogged
            ? <Login />
            : switchViews()
        }
      </div>
    </EditContext.Provider>
  )
}
