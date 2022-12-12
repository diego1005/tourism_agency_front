
import { useContext } from 'react'
import Menu from './Menu/Menu'
import './Panel.css'
import { AppContext } from '../../../Context/context'

export default function UserNav() {

  const { userLogged } = useContext(AppContext)

  return (
    <div className='panel'>
      {
        userLogged
          ? <Menu />
          : <i className="fa-solid fa-user-slash"></i>
      }
    </div>
  )
}
