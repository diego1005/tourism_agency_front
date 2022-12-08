import { useContext, useEffect } from 'react';
import './Home.css';
import Main from '../../components/main/Main';
import Profile from '../../components/profile/Profile'
import { ViewContext } from '../../context/context';

export default function Home({ user }) {

    const { view } = useContext(ViewContext);

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
    }, []);

    let components = {
        "profile": <Profile />
    }

    const switchComponents = () => {
        return components[view] ? components[view] : <Main />
    }

    return (
        <div>
            {
                switchComponents
            }
        </div>
    )
}

