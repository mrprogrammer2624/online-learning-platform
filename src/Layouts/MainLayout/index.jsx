import { useTitle } from "@/App";
import { Header } from "@/Components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const { headerText } = useTitle();
  return (
    <>
      <Header />
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto container px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {headerText}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
