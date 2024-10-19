import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../UICard";

export const Course = ({
  id,
  title,
  description,
  instructor,
  category,
  difficulty,
}) => {
  return (
    <Card className="w-full max-w-sm border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{instructor}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex gap-2">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {category}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            {difficulty}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/courses/${id}`} passHref>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View Course
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};
