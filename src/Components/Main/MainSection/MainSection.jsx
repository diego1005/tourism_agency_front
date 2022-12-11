import { useEffect, useContext } from 'react';
import Login from '../../../Pages/Login/Login';
import './MainSection.css';
import { AppContext, ViewContext } from '../../../Context/context';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import NewStudent from '../../../Pages/NewStudent/NewStudent';
import NewContract from '../../../Pages/NewContract/NewContract';

export default function MainSection() {

  const { userLogged, userIsLogged } = useContext(AppContext);
  const { view } = useContext(ViewContext);

  useEffect(() => {
    console.log('%cComponent Main Section is mount', 'color: green');
    userIsLogged();
    switchViews(view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  const views = {
    "newStudent": <NewStudent />,
    "newContract": <NewContract />,
  }

  const switchViews = (view) => {
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
