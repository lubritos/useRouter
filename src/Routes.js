import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Listado from "./pages/Listado";
import NotMatch from "./pages/NotMatch";

function Routes() {
  const RoutesApp = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/listado",
      element: <Listado />
    },
    {
      path: "*",
      element: <NotMatch />
    }
  ]);

  return RoutesApp;
}

export default Routes;
