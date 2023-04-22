import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App1 from "./App1";
import { Home, SearchEngine, Calendar, ContactUs, AboutUs, Task, LearningApp, FitnessApp, PresentationWebsite, Financial, ColorPicker, Editor, WeatherApp, TechNewsWebsite, PersonalBlogApp, DheerajQuiz, Login, Signup } from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>

      <BrowserRouter>
        <Routes>
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path='' element={<App1 />}>
            <Route path="/" element={(<Home />)} />
            <Route path="/home" element={(<Home />)} />
            <Route path="/search-engine" element={<SearchEngine />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/learning-app" element={<LearningApp />} />
            <Route path="/fitness-app" element={<FitnessApp />} />
            <Route path="/weather-app" element={<WeatherApp />} />
            <Route path="/presentation-website" element={<PresentationWebsite />} />
            <Route path="/financial-website" element={<Financial />} />
            <Route path="/tech-news-website" element={<TechNewsWebsite />} />
            <Route path="/personal-blog-app" element={<PersonalBlogApp />} />
            <Route path="/dheeraj-quiz" element={<DheerajQuiz />} />
            <Route path="/task-to-do" element={<Task />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;