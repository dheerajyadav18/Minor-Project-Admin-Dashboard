import { useState } from "react";
import AppsContext from "./AppsContext.js";


export default function ContextState(props) {


    const [Apps, setApps] = useState({
        learningapp: true, fitnessapp: true, weatherapp: true, technewsapp: true,
        financial: true, blogapp: true, quizapp: true, pptapp: true, searchapp: true, aboutus: true, contactus: true, taskapp: true
    });
    return (
        <AppsContext.Provider value={{ Apps, setApps }}>
            {props.children}
        </AppsContext.Provider>
    )
}