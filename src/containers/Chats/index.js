import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from '../../actions/UserActions'

export class Chats extends Component{
    componentWillMount(){
    }

    render() {
        return(
            <div className="container">
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats)
