import React, { Component } from 'react'
import './HomePage.css';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    getText() {
        if (this.props.current === "Startup") {
            return (
                <div className="home-page-wrapper page1">
                    <h2>Extend your business opportunities.</h2>
            <h2>Join the digital nation.</h2>
                </div>
            );
        } else if (this.props.current === "Corporation") {
            return (
                <div className="home-page-wrapper page1">
                    <h2>Find new startups that fit you best.</h2>
            <h2>Safe and sound.</h2>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="main-wrapper">
                {this.getText()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    current: state.current
});

export default connect(
    mapStateToProps
)(withRouter(HomePage))