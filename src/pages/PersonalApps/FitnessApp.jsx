import React from 'react';
import fitness from "../../Templetes/FitnessApp.htm"
const FitnessApp = () => {

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div>
     <iframe name="report" height="800px" width="100%" src={fitness} title='fitness app'  ></iframe>
    </div>
    </div>
  );
};

export default FitnessApp;
