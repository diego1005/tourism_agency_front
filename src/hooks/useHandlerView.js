import { useState } from 'react'
// import { displayView } from '../common/views/displayView'

export const useHandlerView = () => {

    const [view, setView] = useState();

    const handlerView = (newView) => {
        setView(newView)
    }

    return {
        view,
        setView,
        handlerView,
    }

}