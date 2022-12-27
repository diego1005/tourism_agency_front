import './Main.css'
import MainSection from './MainSection/MainSection'
import Sidebar from './Sidebar/Sidebar'

export default function Main() {

    return (
        <div className='main'>
            <Sidebar />
            <MainSection />
        </div>
    )
}
