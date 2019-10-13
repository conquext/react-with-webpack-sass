import React from "react";

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title" onClick={props.handleToggleSubtitle}>
        {props.title}
      </h1>

      {!!props.showSubtitle && (
        <h2 className="header__subtitle">{props.subtitle} &#128519;</h2>
      )}
    </div>
  </div>
);

Header.defaultProps = {
  title: "Show Subtitle"
};

export default Header;
