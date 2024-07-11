import AppContextProvider from "./common/context/AppContextProvider";
import RouterApp from "./common/routers/RouterApp";

const App = () => {

  return (
    <AppContextProvider >
      <RouterApp />
    </AppContextProvider>
  )
}

export default App;