import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddTask from "../Components/TaskComponents/AddTask";
import CompletedTask from "../Components/TaskComponents/CompletedTask";
import MyTask from "../Components/TaskComponents/MyTask";
import Main from "../Layouts/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "/my-task",
        element: <MyTask></MyTask>,
      },
      {
        path: "/Completed-task",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
