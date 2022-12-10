import './Header.css'
import Logo from './Logo/Logo'
import UserNav from './UserNav/UserNav'

export default function Header() {
  return (
    <div className='header'>
      <Logo/>
      <UserNav/>
    </div>
  )
}
