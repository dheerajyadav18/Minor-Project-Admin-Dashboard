import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ModifiedHome } from '../pages/ModifiedHome.jsx';
import { Button } from '../components';
import { dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import LearningLOGO from '../data/LearningPNg.PNG';
import FitnessLOGO from '../data/FitnessPng.PNG';
import TechNewsLOGO from '../data/TechNewsLogo.PNG';
import FinancialLOGO from '../data/FinancialApp.PNG';
import BlogLOGO from '../data/Blog.PNG';
import QuizLOGO from '../data/Quiz.PNG';
import PPTLOGO from '../data/PPT.PNG';
import SearchLOGO from '../data/Search.PNG';
import AboutLOGO from '../data/AboutUS.PNG';
import ContactLOGO from '../data/Contact.PNG';
import TaskLOGO from '../data/Task.PNG';
import WeatherLOGO from '../data/weather.png';
import AppsContext from '../Context/AppsContext';

// import SearchEngine from './SearchEngine.jsx';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {
  const { currentColor, currentMode } = useStateContext();
  const { Apps, setApps } = useContext(AppsContext);
  console.log(Apps);

  return (

    <div>
      <ModifiedHome />


      <div className="mt-24 flex flex-auto flex-wrap pl-48 ">

        {
          Apps.learningapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Learning App</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={LearningLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">App to help for learning different things.</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Learning App you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/learning-app"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }

        {
          Apps.fitnessapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Fitness App</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={FitnessLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Track Your fitness and excercise.</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Fitness and Health you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/fitness-app"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.weatherapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Weather App</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={WeatherLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Instant Weather Report!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Weather App Application you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/weather-app"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.technewsapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Tech News App</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={TechNewsLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Technology is Everything!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the news you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/tech-news-Website"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.financial && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Financial Website </p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={FinancialLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Track And Check your financial statements!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Financial Website you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/financial-website"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.blogapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Personal Blog App</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={BlogLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Create Your Personal Blogs And Save For the Future!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Blog app you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/personal-blog-app"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.quizapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Dheeraj Quiz</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={QuizLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Create a Quiz!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Quiz App you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/dheeraj-quiz"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.pptapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Presentation Website</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={PPTLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Make Presentation for your projects!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the ppt app you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/presentation-website"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.searchapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Personal Search Engine</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={SearchLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Search your info here!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the SearchEngine you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/search-engine"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.aboutus && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">About Us</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={AboutLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">About Section of Team Pay_Attention!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the Team you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/about-us"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.contactus && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Contact Us</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={ContactLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">If you want to connect with our team!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the connection you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/contact-us"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        {
          Apps.taskapp && <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Task To Do</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={TaskLOGO}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">Set Your Goals!</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the task to do you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Link to={"/task-to-do"}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Open"
                      borderRadius="10px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Home;
