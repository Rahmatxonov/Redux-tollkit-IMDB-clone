// import "./contentWrapper.scss";

// const ContentWrapper = ({ children }) => {
//   return <div className="contentWrapper">{children}</div>;
// };

// export default ContentWrapper;

import PropTypes from "prop-types";
import "./contentWrapper.scss";
const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
