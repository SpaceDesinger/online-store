import * as React from "react";
import NavBar from "@/components/NavBar.tsx";
import {observer} from "mobx-react-lite";
import {useStores} from "@/hooks/useStores.ts";
import {useEffect, useState} from "react";
import {check} from "@/entities/api/userApi.ts";
import {Spinner} from "react-bootstrap";

const AppLayout = observer( ({children} : {children: React.ReactNode}) => {
    const {user} = useStores()
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        check().then( data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => {
            setLoading(false)
        })
    },[])
    if(loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
        <>
            <NavBar/>
            <main>{children}</main>
        </>
    );
});

export default AppLayout;