import { createContext ,useState } from "react"
export const UserContext = createContext()// use Components
export const UserProvider = ({children}) => {
    const [data , setData] = useState({name:"Rishi", branch:"CSE"})
    const [products, setProducts] = useState([])
    return (
        <UserContext.Provider value={{data , setData,products, setProducts}}>

            {children}
        </UserContext.Provider>
    )
}
