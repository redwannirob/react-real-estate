import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import PropTypes from "prop-types";

export const AuthContex = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                        // console.log(user)
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const[hotels,setHotels] = useState([]);
    useEffect(()=>{
        fetch('/hotels.json')
        .then(res => res.json())
        .then(data => setHotels(data))
    },[]);
    const[motels,setMotels]=useState([])
    useEffect(()=>{
        fetch('/motels.json')
        .then(res => res.json())
        .then(data => setMotels(data))
    },[])
    const [lodges,setLodges] = useState([])
    useEffect(()=>{
        fetch('/lodges.json')
        .then(res => res.json())
        .then(data => setLodges(data))
    },[])
    const [resorts,setResorts]=useState([])
    useEffect(()=>{
        fetch('/resorts.json')
        .then(res => res.json())
        .then(data => setResorts(data))
    },[])
    const [vacationRentals,setVacationRentals] = useState([])
    useEffect(()=>{
        fetch('vacationRentals.json')
        .then(res => res.json())
        .then(data => setVacationRentals(data))
    },[])
    const [guestHouses,setGuestHouses] = useState([])
    useEffect(()=>{
        fetch('/guestHouses.json')
        .then(res => res.json())
        .then(data => setGuestHouses(data))
    },[])

    const authInfo = {hotels,motels,resorts,lodges,guestHouses,vacationRentals,user,register,logIn,logOut}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}