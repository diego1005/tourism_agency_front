import { useEffect } from 'react';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import { useAuth } from './hooks/useAuth';

function App() {

  const { userLogged, userIsLogged } = useAuth();

  useEffect(() => {
    console.log('%cComponent App is mount', 'color: green');
    userIsLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {
        !userLogged
          ? <Login />
          : <Home user={userLogged} />
      }
    </div>
  );
}

export default App;
