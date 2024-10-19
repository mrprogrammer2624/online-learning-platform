import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components";
import { enrollCourse } from "@/Store";
import { useParams } from "react-router-dom";
import { useTitle } from "@/App";

const courseData = {
  1: {
    id: "1",
    title: "Introduction to React",
    description: "Learn the basics of React and build your first app",
    instructor: "John Doe",
    category: "Web Development",
    difficulty: "Beginner",
    lessons: [
      { id: "1", title: "React Basics", duration: "30 minutes" },
      { id: "2", title: "Components and Props", duration: "45 minutes" },
      { id: "3", title: "State and Lifecycle", duration: "60 minutes" },
    ],
  },
};

export const CourseDetail = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Course Detail");
  const { id } = useParams();
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.user.enrolledCourses);

  const course = courseData[id];

  if (!course) {
    return <div>Course not found</div>;
  }

  const isEnrolled = enrolledCourses.some((c) => c.id === id);

  const handleEnroll = () => {
    dispatch(enrollCourse(course));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.instructor}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {course.category}
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              {course.difficulty}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Lessons</h3>
          <ul className="list-disc pl-5">
            {course.lessons.map((lesson) => (
              <li key={lesson.id} className="mb-2">
                {lesson.title} - {lesson.duration}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          {isEnrolled ? (
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-400 rounded-lg bg-gray-200 cursor-not-allowed"
              disabled
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-300 rounded-md">
                Enrolled
              </span>
            </button>
          ) : (
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={handleEnroll}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Enroll Now
              </span>
            </button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
