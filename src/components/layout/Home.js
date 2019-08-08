import React, { Component } from 'react'

import Progress from "../../assets/image/progress.png";
import Project20 from "../../assets/image/project-report-20.png";
import Project40 from "../../assets/image/project-report-40.png";
import Project60 from "../../assets/image/project-report-60.png";
import Project90 from "../../assets/image/project-report-90.png";
import Project95 from "../../assets/image/project-report-95.png";

export class Home extends Component {
    render() {
        return (
            <div className="myBody">
                <img className='fit' alt='alt' src={Progress}/><br/>
                <img className='fit' alt='alt' src={Project20}/><br/>
                <img className='fit' alt='alt' src={Project40}/><br/>
                <img className='fit' alt='alt' src={Project60}/><br/>
                <img className='fit' alt='alt' src={Project90}/><br/>
                <img className='fit' alt='alt' src={Project95}/>
            </div>
        )
    }
}

export default Home
