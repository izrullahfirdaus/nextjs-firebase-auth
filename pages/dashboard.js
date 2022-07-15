import React from "react";
import {useAuth} from "../context/AuthContext";
import {router} from "next/client";

const Dashboard = () => {
    const {user, logout} = useAuth()
    const handleLogout = async () => {
        logout()
        await router.push('/')
    }
    return (
        <>
            This is dashboard - Hello {user.email}
            <a onClick={handleLogout}>Logout</a>
        </>
    )
}

export default Dashboard