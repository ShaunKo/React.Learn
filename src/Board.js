import React from 'react';
import Square from './Square.js';
export default class Board extends React.Component {
    // renderSquare(i) {
    //     return <Square value={i} />
    // }

    render() {
        const status = 'AsianSquat';
        return (
            <div>
                <div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <div>{status}</div>
                <div></div>
            </div>
        );
    }
}