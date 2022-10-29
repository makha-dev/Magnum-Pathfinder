import maps from "../maps/grids";

import React, {useState, useContext, useEffect} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    console.log(maps);
    
    const [startingPoint, setStartingPoint] = useState({r: 0, c: 0});
    const [finishPoint, setFinishPoint] = useState({r: 20, c: 30});
    const [curMap, setCurMap] = useState(maps['magnum']);
    const [isPointsSet, setIsPointsSet] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);


    const setPoints = (x1, y1, x2, y2) => {
        
    } 

    const setMap = (e) => {

    }

    return <AppContext.Provider value={{startingPoint, finishPoint, curMap, isPointsSet, setPoints, setMap}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};
