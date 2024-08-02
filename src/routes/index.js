import { Navigate } from "react-router-dom";
import LayoutAdmin  from "../components/Layouts/LayoutAdmin/index"
import TaskManage from "../pages/TaskManage/index"
import CreateTask from "../pages/TaskManage/CreateTask";
import TaskDetail from "../pages/TaskManage/TaskDetail";
export const routes = [
  // Public
  {
    path: "/",
    element: <LayoutAdmin/>,
    children: [
      {
        index: true,
        element: <TaskManage />,
      },
      {
        path: "create-task",
        element: <CreateTask />,
      },
      {
        path: "detail-task/:id",
        element: <TaskDetail/>,
      },
    ],
  },
  // End Public

];
