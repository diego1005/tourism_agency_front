import { useContext } from 'react'
// import { displayView } from '../common/views/displayView'
import { ViewContext } from '../context/context'

export const useHandlerView = () => {

    const { setView } = useContext(ViewContext);

    const handlerView = (view) => {
        setView(view)
    }   

    return {
        handlerView,
    }

}