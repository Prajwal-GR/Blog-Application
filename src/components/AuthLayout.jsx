import React from 'react';
import { useState , useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom'
function Protected({children,authentication =  true}){

    const authStatus = useSelector((state)=>state.auth.status)

    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);// ..? 

    useEffect(()=>{
        if(authentication && authStatus!== authentication){
            navigate('/login')
        }else if(!authentication && authStatus!=authentication){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,authentication,navigation])
    return loader?null : <>{children}</>
}

export default Protected;