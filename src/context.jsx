import React, {useContext, useEffect} from 'react'
import App from './App'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    useEffect( () => {
        console.log('fetch data here')

        //can use .them or async/await
        //fetch().then
        //cannot normally turn into async because of react
    },[])
    
    return <AppContext.Provider value={{name: 'Ashe', role: 'Student'}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}