import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import './Home.css';
import Login from '../../components/login/Login';

export default function Home() {

    const { userLogged, userIsLogged } = useContext(AppContext);

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
        userIsLogged();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                !userLogged &&
                <Login />
            }
        </div>
    )
}

