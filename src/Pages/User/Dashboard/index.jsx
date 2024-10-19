import { useTitle } from "@/App";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/";

const enrolledCourses = [
  {
    id: "1",
    title: "Introduction to React",
    instructor: "John Doe",
    progress: 60,
  },
  {
    id: "2",
    title: "Advanced JavaScript Patterns",
    instructor: "Jane Smith",
    progress: 30,
  },
];

export const Dashboard = () => {
  const { setHeaderText } = useTitle();
  const navigate = useNavigate();
  setHeaderText("My Dashboard");

  const handleResumeCourse = (id) => {
    navigate(`/courses/${id}/learn`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Complete
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  {course.progress} %
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: course.progress + "%" }}
                ></div>
              </div>
            </CardContent>
            <CardFooter>
              <button
                onClick={() => handleResumeCourse(course.id)}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume Course
                </span>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
