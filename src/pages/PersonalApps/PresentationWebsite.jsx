// import React from 'react';

// import { pieChartData } from '../../data/dummy';
// import { ChartsHeader, Pie as PieChart } from '../../components';

// const PresentationWebsite = () => (
//   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
//     <ChartsHeader category="Pie" title="Project Cost Breakdown" />
//     <div className="w-full">
//       <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
//     </div>
//   </div>
// );

// export default PresentationWebsite;

import React from 'react';

import pptwebsite from "../../Templetes/PptWebsite.htm"

const PresentationWebsite = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
     <iframe name="report" height="650px" width="100%" src={pptwebsite} title='presentationwebsite' scrolling="no"  ></iframe>
  </div>
);

export default PresentationWebsite;