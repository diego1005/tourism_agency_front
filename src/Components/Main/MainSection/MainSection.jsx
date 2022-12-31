import { useEffect, useContext } from 'react';
import Login from '../../../Pages/Login/Login';
import './MainSection.css';
import { AppContext, ViewContext } from '../../../Context/context';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import NewStudent from '../../../Pages/NewStudent/NewStudent';
import NewContract from '../../../Pages/NewContract/NewContract';
import ListData from '../../../Pages/ListData/ListData';
import { studentListData, individualListData, generalListData } from '../../../Common/List';

export default function MainSection() {

  const { userLogged, userIsLogged } = useContext(AppContext);
  const { view } = useContext(ViewContext);

  useEffect(() => {
    console.log('%cComponent Main Section is mount', 'color: green');
    userIsLogged();
    switchViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  console.log(view);

  let views = {
    "newStudent": <NewStudent />,
    "individual": <NewContract />,
    "general": <NewContract />,
    "studentsList": <ListData listData={studentListData} />,
    "individualList": <ListData listData={individualListData} />,
    "generalList": <ListData listData={generalListData} />
  }

  const switchViews = () => {
    return views[view] ? views[view] : <Dashboard />
  }

  return (
    <div className='main-section'>
      {
        !userLogged
          ? <Login />
          : switchViews()
      }
    </div>
  )
}
