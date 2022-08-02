/* import { createContext , useState } from "react";

const AuthContext = createContext({});
const FlatContext = createContext({});
export const AuthProvider = ({children})=>{
    // const [auth,setAuth] = useState({});
const [flatId,setFlatId]=useState({});
const [BookingNo,setBookingNo]=useState({});

    return (<FlatContext.Provider value={{flatId,setFlatId,BookingNo,setBookingNo}}>
        {children}
    </FlatContext.Provider>)
}
export default FlatContext; */