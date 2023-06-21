import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";


import Header from "./components/Header";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="App">
      <div className="wrapper">
 {       <SearchContext.Provider value={{searchValue, setSearchValue}}  >
        <Header/>
        <div className="content">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
        </SearchContext.Provider>
}
      </div>
    </div>
  );
}

export default App;
