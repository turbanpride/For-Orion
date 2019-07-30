import React,{Component} from 'react';
import './Header.css';
import {Row,Col} from 'react-bootstrap';
import FontAwesome from "react-fontawesome";

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e)
    {
        this.props.setSearchedVal(e.target.value);
    }
    render()
    {
        return(
            <div className="header-main">
            <Row className="show-grid">
            <Col sm={4} xs={4}>
            <div className="website-name"><span>Movie Catalog</span></div>
            </Col>
            <Col sm={4} xs={4}>
            <input type="text" placeholder="Search" className="search-input" onChange={this.handleSearch}></input>
            </Col>
            <Col sm={4} xs={4} className="username-col">
            <FontAwesome className="user-icon" name="user" />
            <p className="username">Alexander</p>
            <FontAwesome className="caretdown-icon" name="caret-down" />
            </Col> 
            
            </Row>
            
            </div>
        );
    }
}

export default Header;