import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="titleHome">Welcome to start page</h1>

      <span className="subTitleHome">
        All tasks are completed using react hooks, and two tasks combined using
        react router
      </span>

      <div className="wrapperDescription">
        <span className="description">
          In the first task, form validation was added during data entry, as
          well as saving all data to local storage
        </span>

        <span className="description">
          The second task, when clicking on a specific page, shows only a single
          item. When you click on "load more", additional elements are loaded
          using the API.
        </span>
      </div>
    </div>
  );
};

export default Home;
