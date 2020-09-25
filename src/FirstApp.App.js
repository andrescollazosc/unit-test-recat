// FC State Functional Component
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// import React, { Fragment } from "react";

const FirstApp = ({ greeting, subTitle }) => {
  //   const greeting = 'Hello world';

  return (
    <>
      {/* <pre>{JSON.stringify(greeting, null, 3)}</pre> */}
      <h1>{greeting}</h1>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subTitle: "I am a subtitle",
};

export default FirstApp;
