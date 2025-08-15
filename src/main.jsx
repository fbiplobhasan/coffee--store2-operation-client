import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp";
import Provider from "./assets/Provider/Provider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: async () => {
      try {
        const response = await fetch(
          "https://coffee-store-operation-server-4hxqoj3ob-biplpb-hasans-projects.vercel.app/coffees"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Fetch error:", error);
        return [];
      }
    },
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-operation-server-4hxqoj3ob-biplpb-hasans-projects.vercel.app/coffees/${params.id}`
      ),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: async () => {
      const res = await fetch(
        "https://coffee-store-operation-server-4hxqoj3ob-biplpb-hasans-projects.vercel.app/users",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
