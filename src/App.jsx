import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import { ReactQueryDevtools } from "@tanstack  /react-query-devtools";
import Applayout from "./ui/Applayout"
// import About from "./page/about";
import Error from "./ui/Error";
import Workspace from "./page/Workspace";
import Home from "./page/Home";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";



const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    element:<Home/>,
    errorElement:<Error />,
    path:"/" 
  }
],
{
  basename: "/salman-portfolio"  // <-- Add your base path here
}
)
function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        lerp: 0,
        duration: 4,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
});

  return (
<main data-scroll>
<QueryClientProvider client={queryClient}>



  <Toaster 
     position="bottom-center"
     gutter={100}
     containerStyle={{ margin: "8px" }}
     toastOptions={{
       success: {
         duration: 5000,
       },
       error: {
         duration: 5000,
       },
       style: {
         fontSize: "16px",
         maxWidth: "500px",
         padding: "16px 24px",
         backgroundColor: "#161616",
         color: "white",
       },
     }}
  />
{/* <ReactQueryDevtools initialIsOpen={false} /> */}
  <RouterProvider router={router}/>
</QueryClientProvider>
</main>
  )
}

export default App