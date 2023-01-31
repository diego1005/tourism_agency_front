import { useEffect, useContext, useState } from 'react';
import Login from '../../../Pages/Login/Login';
import './MainSection.css';
import { AppContext, DataContext, ViewContext } from '../../../Context/context';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import NewStudent from '../../../Pages/NewStudent/NewStudent';
import NewContract from '../../../Pages/NewContract/NewContract';
import ListStudentsData from '../../../Pages/ListStudentsData/ListStudentsData';
import StudentDetails from '../../../Pages/StudentDetails/StudentDetails';
import ListPersonalContractData from '../../../Pages/ListPersonalContractData/ListPersonalContractData';
import { studentListData, individualListData, generalListData } from '../../../Common/List';
import NewDestination from '../../../Pages/NewDestination/NewDestination';
import EditData from '../../../Pages/EditData/EditData';

export default function MainSection() {

  const [details, setDetails] = useState([]);
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
    "student-details": <StudentDetails details={details} />,
    //agregar nuevas vistas (individual-list, general-list)
    "individual-list": <ListPersonalContractData listData={individualListData} />,
    // "general-list": <ListData listData={generalListData} />,
    "destinations": <NewDestination />,
    "edit-form": <EditData editData={editData} />
  }

  const switchViews = () => {
    return views[view] ? views[view] : <Dashboard />
  }

  return (
    <DataContext.Provider value={{ setDetails, setEditData }}>
      <div className='main-section'>
        {
          !userLogged
            ? <Login />
            : switchViews()
        }
      </div>
    </DataContext.Provider>
  )
}
