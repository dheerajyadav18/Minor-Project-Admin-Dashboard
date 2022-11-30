import { useState } from "react";
import AppsContext from "./AppsContext.js";


export default function ContextState(props) {
   

    const [Apps, setApps] = useState({ learningapp: true, fitnessapp: true});
    return (
        <AppsContext.Provider value={{ Apps, setApps }}>
            {props.children}
        </AppsContext.Provider>
    )
}