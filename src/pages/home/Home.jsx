import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';


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
                <h1>Hello World</h1>
            }
        </div>
    )
}

