import { useTitle } from "@/App";
import { allCourses } from "@/Constants/data";
import { useParams } from "react-router-dom";

export const LearnCourse = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Learn Course");

  const { id } = useParams();
  const course = allCourses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Learning: {course.title}</h1>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <div className="bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Video Player Placeholder</p>
        </div>
      </div>
      <div className="prose max-w-none">
        <h2>Lesson Content</h2>
        <p>
          This is where the lesson content would go. You can integrate rich
          text, code snippets, or any other learning materials here.
        </p>
      </div>
    </div>
  );
};
