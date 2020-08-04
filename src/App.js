import "react-rtg/build/index.css";
import React, {useMemo} from 'react';
import GuideTourVertical from "./Tour/GuideTourVertical";
import GuideTourHorizontal from "./Tour/GuideTourHorizontal";
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import "./style/main.scss";
import {TourRoot} from "react-rtg";


import PageVertical from "./Pages/Vertical/Vertical";
import PageHorizontal from "./Pages/Horizonal/Horizontal";

const App = () => {

    const vertical = useMemo(()=>{
        const bus = {}
        return (
            <>
                <GuideTourVertical bus={bus}/>
                <PageVertical bus={bus}/>
            </>
        )
    }, [])

    const horizontal = useMemo(()=>{
        return (
            <>
                <TourRoot>
                    <GuideTourHorizontal />
                    <PageHorizontal  />
                </TourRoot>
            </>
        )
    }, [])

    return (
        <div>
            <Router>
                <Switch>
                    <Route path={"/horizontal"} exact component={() => horizontal}/>
                    <Route path="/" component={() => vertical}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
