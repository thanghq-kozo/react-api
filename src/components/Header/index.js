import React from "react";
import Button from "../Button";
import "./Header.css";

function Header(props) {
  const handleReviewEN = (event) => {
    event.preventDefault();
    props.setReviewEN(true);
    props.setReviewVI(false);
  };

  const handleReviewVI = (event) => {
    event.preventDefault();
    props.setReviewEN(false);
    props.setReviewVI(true);
  };

  const handleHome = () => {
    props.setReviewEN(false);
    props.setReviewVI(false);
  };

  return (
    <header className="main-header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand" onClick={handleHome}>
            HOME
          </p>
          <form className="d-flex">
            <Button
              data={{
                className: "btn-outline-success me-2",
                name: "Review EN",
              }}
              handleClick={handleReviewEN}
            />
            <Button
              data={{
                className: "btn-outline-info me-2",
                name: "Review VI",
              }}
              handleClick={handleReviewVI}
            />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
