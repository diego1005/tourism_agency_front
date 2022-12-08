import { useEffect } from 'react';
import { ViewContext } from './context/context';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import { useAuth } from './hooks/useAuth';
import { useHandlerView } from './hooks/useHandlerView';

function App() {

  const { view, setView } = useHandlerView();
  const { userLogged, userIsLogged } = useAuth();

  useEffect(() => {
    console.log('%cComponent App is mount', 'color: green');
    userIsLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      <div>
        {
          !userLogged
            ? <Login />
            : <Home user={userLogged} />
        }
      </div>
    </ViewContext.Provider>
  );
}

export default App;
