import React from 'react';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div>LOGO</div>
        <nav>
            <ul>
                <li>.</li>
                <li>.</li>
                <li>.</li>
            </ul>
        </nav>
    </header>
);

export default toolbar;