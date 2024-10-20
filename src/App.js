import "./App.css"
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
function App() {
  return (
    <Provider store={store}>
      
      
      <Head/>
      <Body/>

    </Provider>
    
  );
}

export default App;
