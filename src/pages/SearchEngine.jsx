import React from "react";
import searchengine from "../Templetes/SearchEngine.htm";
// import '../styles/Search_engine.css'

const SearchEngine = () => {
  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div>
      <div className="m-2 md:m-0 mt-0 p-0 md:p-0 bg-white rounded-3xl">
        <iframe
          name="report"
          height="600px"
          width="100%"
          src={searchengine}
          scrolling="no"
          title="serachpage"
        ></iframe>
      </div>
    </div>
  );
};
export default SearchEngine;
