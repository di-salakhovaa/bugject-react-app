import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Root from "../pages/Root";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/users/:id",
                element: <UserPage />,
            },
        ]
    }
]);

export default router;