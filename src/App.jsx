import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./components/layout/Root";
import Executive from "./pages/executive/Executive";
import Corporate from "./pages/cooperate/Corporate";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Executive />} />
        <Route path="/corporate" element={<Corporate />} />
      </Route>
    )
  )




  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App