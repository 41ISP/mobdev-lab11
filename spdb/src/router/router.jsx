import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/Search/Search";
import SongPage from "../pages/SongPage/SongPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />
    },
    {
        path:"/song/:id",
        element: <SongPage/>
    }
])