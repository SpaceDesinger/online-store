import {createBrowserRouter} from "react-router-dom";
import Admin from "@/pages/Admin";
import Auth from "@/pages/Auth";
import Cart from "@/pages/Cart";
import Shop from "@/pages/Shop";
import DevicePage from "@/pages/DevicePage";
import {ROUTES} from "@/utils/constants/routes.ts";
import AppLayout from "@/layout/AppLayout.tsx";


export const AppRouter = createBrowserRouter([
    {
        path: ROUTES.SHOP,
        element: <AppLayout><Shop/></AppLayout>
    },
    {
        path: ROUTES.ADMIN,
        element: <AppLayout><Admin/></AppLayout>
    },
    {
        path: ROUTES.LOGIN,
        element:<AppLayout><Auth/></AppLayout>
    },
    {
        path: ROUTES.REGISTRATION,
        element:<AppLayout><Auth/></AppLayout>
    },
    {
        path: ROUTES.CART,
        element:<AppLayout> <Cart/></AppLayout>
    },
    {
        path: ROUTES.DEVICE,
        element: <AppLayout><DevicePage/></AppLayout>
    },
])