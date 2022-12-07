import { useState } from 'react'
import { getById } from '../services/user/userServices';

export const useAuth = () => {

  const [userLogged, setUserLogged] = useState(null);

  const userIsLogged = async () => {
    // Check if there is a token in local storage
    const tokenInStorage = localStorage.getItem("token");
    // If it is
    if (tokenInStorage) {
      // Check if it is valid token
      const data = await getById();
      (data.token) ? setUserLogged(data.token) : localStorage.clear();
    } else {
      setUserLogged(null);
    }
  }

  return {
    userLogged,
    userIsLogged,
  }
}
