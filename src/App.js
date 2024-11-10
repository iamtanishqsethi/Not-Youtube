import "./App.css"
import Head from "./Components/Head";
import Body from "./Components/Body";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[//the childerr will go where ever the outlet is 
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
  }
])
function App() {
  
  return (
    <Provider store={store}>
      
      

      <RouterProvider router={appRouter}/>

      
      {/* <Body/> */}

    </Provider>
    
  );
}

export default App;
