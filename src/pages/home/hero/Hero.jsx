// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./hero.scss";

// const Hero = () => {
//   const [background, setBackground] = useState("");
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const searchQueryHandler = (event) => {
//     if (event.key === "Enter" && query.length > 0) {
//       navigate(`/search/${query}`);
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="hero__wrapper">
//         <div className="hero__wrapper__content">
//           <p className="hero__wrapper__content__title">Welcome </p>
//           <p className="hero__wrapper__content__subTitle">Bye </p>
//           <div className="searchInput">
//             <input
//               type="text"
//               placeholder="Search movies..."
//               onKeyUp={searchQueryHandler}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button>Search</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Image from "../../../components/lazyloadimage/Image";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./hero.scss";

const Hero = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const searchButtonClickHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero">
      {!loading && (
        <div className="hero__backdrop-img">
          <Image src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="hero__content">
          <p className="hero__content__title">Welcome </p>
          <p className="hero__content__subTitle">Bye </p>
          <div className="hero__content__searchInput">
            <input
              type="text"
              placeholder="Search movies..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchButtonClickHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
