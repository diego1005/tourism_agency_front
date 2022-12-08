import { useState, useEffect } from 'react';
import { ViewContext } from '../../context/context';
import './Home.css';
import Main from '../../components/main/Main';
import Profile from '../../components/profile/Profile'

export default function Home({ user }) {

    const [view, setView] = useState();

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
        <ViewContext.Provider value={{ setView }}>
            <div>
                {
                    switchComponents
                }
            </div>
        </ViewContext.Provider>
    )
}

