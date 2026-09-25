import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "@/app/router/AppRouter";
import {Context} from '@/context/context'
import {stores} from "@/stores";

createRoot(document.getElementById('root')!).render(
    <Context.Provider value={stores}>
        <StrictMode>
            <RouterProvider router={AppRouter}/>
        </StrictMode>
    </Context.Provider>
)
