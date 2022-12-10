import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
