import React, { Component } from 'react';
import Seach from './Seach';
import Sort from './Sort';

class Control extends Component {

    render() {
        return (
            <div className="row mt-15">  
                {/* Seach */}
                <Seach onSearch = {this.props.onSearch} />
                {/* Sort */}
                <Sort sortBy= {this.props.sortBy} sortValue={this.props.sortValue} onSort = {this.props.onSort}/>
            </div>
        );
    }
}

export default Control;