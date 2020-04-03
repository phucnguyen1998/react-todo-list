import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sort extends Component {
    
    onClick = (sortBy, sortValue) => {
       this.props.onSort(sortBy,sortValue)
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li className="d-flex" onClick={() => this.onClick('name',1)}>
                            <Link to="/" role="button">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </Link>
                            {(this.props.sortBy === 'name' && this.props.sortValue === 1) ? <i className="fa fa-check m-auto" aria-hidden="true"></i> : ''}
                        </li>
                        <li className="d-flex" onClick={() => this.onClick('name',-1)}>
                            <Link to="/" role="button">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </Link>
                            {(this.props.sortBy === 'name' && this.props.sortValue === -1) ? <i className="fa fa-check m-auto" aria-hidden="true"></i> : ''}
                        </li>
                        <li role="separator" className="divider"></li>
                        <li className="d-flex" onClick={() => this.onClick('status',1)}>
                            <Link to="/" role="button">T.T Kích Hoạt</Link>
                            {(this.props.sortBy === 'status' && this.props.sortValue === 1) ? <i className="fa fa-check m-auto" aria-hidden="true"></i> : ''}
                        </li>
                        <li className="d-flex" onClick={() => this.onClick('status',-1)} >
                            <Link to="/" role="button">Trạng Thái Ẩn</Link>
                            {(this.props.sortBy === 'status' && this.props.sortValue === -1) ? <i className="fa fa-check m-auto" aria-hidden="true"></i> : ''}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;