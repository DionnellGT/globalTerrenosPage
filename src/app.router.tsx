import { createHashRouter, Navigate, RouterProvider } from "react-router";
import { GlobalTerrenosLayout } from "./terrenos/layout/GlobalTerrenosLayout";
import { HomePage } from "./terrenos/pages/HomePage";
import { ProyectoPage } from "./terrenos/pages/ProyectoPage";


const appRouter = createHashRouter([
    //Public routes
    { 
        path: '/',
        element: <GlobalTerrenosLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'proyectos/:idSlug',
                element: <ProyectoPage/>
            }
        ]
    },

    {
        path: '*',
        element: <Navigate to='/' />
    },
])

export function AppRouter() {
  return <RouterProvider router={appRouter} />
}