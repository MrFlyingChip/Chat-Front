import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from '../../actions/UserActions'
import {browserHistory} from 'react-router';

export class SighUpPage extends Component{
    onSubmitClick(e){
        e.preventDefault(e);
        let data = {
            email: document.getElementById('exampleInputEmail1').value,
            userName: document.getElementById('exampleInputUserName1').value,
            password: document.getElementById('exampleInputPassword1').value
        };
        this.props.actions.signUp(data);
    }
    componentWillMount(){
        if(this.props.user.isAuthenticated) browserHistory.push('/');
    }
    render() {
        return(
            <div className={'container-form'}>
                <div className="form-horizontal">
                    <h4>Sign up</h4>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="control-label">Email address</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputUserName1" className="control-label">Username</label>
                        <input required type="text" className="form-control" id="exampleInputUserName1" aria-describedby="userHelp" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="control-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmitClick.bind(this)}>Submit</button>
                </div>
                <p>If you have an account <Link to={'/login'}>log in</Link>!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SighUpPage)
