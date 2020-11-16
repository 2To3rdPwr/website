import React from 'react';
import Resume from '../Resume/Resume';
import Classes from './TopWrapper.module.css';

const topWrapper = (props) => (
    <div>
        <div className={Classes.TopBar}>
            <button>Resume</button>
            <button>About Me</button>
            <button>Langton's Ant</button>
        </div>
        <Resume/>
    </div>
)

export default topWrapper;