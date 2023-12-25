// import { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { fetchDataFromApi } from "./utils/api";
// import { useSelector, useDispatch } from "react-redux";
// import { getApiConfiguration } from "./store/homeSlice";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/home/Home";
// import Details from "./pages/details/Details";
// import SearchResult from "./pages/searchResult/SearchResult";
// import Explore from "./pages/explore/Explore";
// import PageNotFound from "./pages/notFound/pageNotFound";
// import "./App.css";

// function App() {
//   const dispatch = useDispatch();
//   const { url } = useSelector((state) => state.home);

//   useEffect(() => {
//     fetchhApiConfig();
//   }, []);

//   const fetchhApiConfig = () => {
//     fetchDataFromApi("/configuration")
//       .then((response) => {
//         console.log(response);

//         const url = {
//           backdrop: response.images.secure_base_url + "original",
//           poster: response.images.secure_base_url + "original",
//           profile: response.images.secure_base_url + "original",
//         };
//         dispatch(getApiConfiguration(response));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route key="home" path="/" element={<Home />} />
//         <Route key="details" path="/:mediaType/:id" element={<Details />} />
//         <Route key="search" path="/search/:query" element={<SearchResult />} />
//         <Route key="explore" path="/explore/:mediaType" element={<Explore />} />
//         <Route key="notFound" path="*" element={<PageNotFound />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/notFound/pageNotFound";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((response) => {
        console.log(response);

        const apiUrl = {
          backdrop: response.images.secure_base_url + "original",
          poster: response.images.secure_base_url + "original",
          profile: response.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(apiUrl));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route key="home" path="/" element={<Home />} />
        <Route key="details" path="/:mediaType/:id" element={<Details />} />
        <Route key="search" path="/search/:query" element={<SearchResult />} />
        <Route key="explore" path="/explore/:mediaType" element={<Explore />} />
        <Route key="notFound" path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
