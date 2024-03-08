import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Characters from "./pages/CharactersPage";
import NotFound from "./pages/NotFound";
import CharacterPage from "./pages/CharacterPage";




const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    index:true,
                    element: <HomePage/>
                },
                {
                    path:"about/",
                    element:<AboutPage/>
                },
                {
                    path:"characters/",
                    element:<Characters/>
                },
                {
                    path:"character/:id",
                    element:<CharacterPage/>
                }
            ],
            errorElement: <NotFound />
        },




]);

export default router;