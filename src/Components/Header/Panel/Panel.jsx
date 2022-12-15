
import { useContext } from 'react'
import UserPanel from './UserPanel/UserPanel'
import './Panel.css'
import { AppContext } from '../../../Context/context'

export default function UserNav() {

  const { userLogged } = useContext(AppContext);

  return (
    <div className='panel'>
      {
        userLogged
          ? <UserPanel />
          : <i className="fa-solid fa-user-slash"></i>
      }
    </div>
  )
}
