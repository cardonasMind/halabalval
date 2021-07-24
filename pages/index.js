import React, { PureComponent, Fragment } from "react";

import Router from "next/router";

import { connect } from "react-redux";

import { Quiz, Score } from "../src/components";

class Index extends PureComponent {
    componentDidMount() {
        if(!this.props.inGame) Router.push("/welcome");
    }
    
    render () {
        if(!this.props.inGame) return null;
        else return (
            <Fragment>
                <Quiz />
                <Score />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        inGame: state.inGame
    }
}

export default connect(mapStateToProps)(Index)