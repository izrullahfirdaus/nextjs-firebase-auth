import React from "react";
import {useAuth} from "../context/AuthContext";
import {useRouter} from "next/router";

const Home = () => {
    const {logout} = useAuth()
    const router = useRouter()
    return (
        <>
            This is home page - <a onClick={() => {
                logout()
                router.push('/')
        }}>Logout</a>
        </>
    )
}

export default Home