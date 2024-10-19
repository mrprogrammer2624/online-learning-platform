import { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import HabitManagementRoutes from "./Routes";

export const HeaderTextContext = createContext();

function App() {
  const [headerText, setHeaderText] = useState("");
  return (
    <Provider store={store}>
      <HeaderTextContext.Provider value={{ headerText, setHeaderText }}>
        <RouterProvider router={HabitManagementRoutes} />
      </HeaderTextContext.Provider>
    </Provider>
  );
}

export const useTitle = () => {
  return useContext(HeaderTextContext);
};

export default App;
