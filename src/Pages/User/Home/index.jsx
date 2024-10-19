import { useTitle } from "@/App";
import { CourseCard } from "@/Components/Cards";
import { featuredCourses } from "@/Constants/data";

export const Home = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Featured Courses");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};
