import { useState } from 'react';
import { ViewContext } from '../../Context/context';
import './Home.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';

export default function Home() {

  const [view, setView] = useState();

  console.log(view);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      <div className='home'>
        <Header />
        <Main />
        <Footer />
      </div>
    </ViewContext.Provider>
  )
}
