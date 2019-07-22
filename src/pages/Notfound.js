import React from "react";

import styled from "styled-components";

const NotfoundStyle = styled.h3`
  height: 60vh;
  color: blue;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Notfound = errorData => {
  console.log(errorData);
  return (
    <NotfoundStyle>
      <h3>Error: 404, something went wrong: {errorData.location.pathname}</h3>
    </NotfoundStyle>
  );
};

export default Notfound;
