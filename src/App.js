import Home from './pages/home/Home';
import { AppContext } from './context/context';
import { useAuth } from './hooks/useAuth';

function App() {

  const { userLogged, userIsLogged } = useAuth();

  return (
    <AppContext.Provider value={{ userLogged, userIsLogged }}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
