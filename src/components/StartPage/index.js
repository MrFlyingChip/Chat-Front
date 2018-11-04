import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from '../../actions/UserActions'
import {Home} from '../Home'

export class StartPage extends Component{
    render() {
        return(
            <div className="container body-content">
                <Home/>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)
