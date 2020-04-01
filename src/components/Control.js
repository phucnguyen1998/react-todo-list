import React, { Component } from 'react';
import Seach from './Seach';
import Sort from './Sort';

class Control extends Component {

    render() {
        return (
            <div className="row mt-15">  
                {/* Seach */}
                <Seach/>
                {/* Sort */}
                <Sort />
            </div>
        );
    }
}

export default Control;