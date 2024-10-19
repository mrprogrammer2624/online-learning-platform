import { AuthLayout, MainLayout } from "@/Layouts";
import {
  CourseDetail,
  LearnCourse,
  Courses,
  Dashboard,
  NotFound,
  UserHome,
} from "@/Pages";
import { Login, SignUp } from "@/Pages/Auth";

import { createBrowserRouter } from "react-router-dom";

const HabitManagementRoutes = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <UserHome />,
            },
            {
              path: "courses",
              children: [
                {
                  index: true,
                  element: <Courses />,
                },
                {
                  path: ":id",
                  children: [
                    {
                      index: true,
                      element: <CourseDetail />,
                    },
                    {
                      path: "learn",
                      element: <LearnCourse />,
                    },
                  ],
                },
              ],
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/",
  }
);

export default HabitManagementRoutes;
