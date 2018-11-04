import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import './styles.css';
import * as UserActions from '../../actions/UserActions'
import {browserHistory} from 'react-router';

export class LoginPage extends Component{
    onSubmitClick(e){
        e.preventDefault(e);
        let data = {
            email: document.getElementById('exampleInputEmail1').value,
            password: document.getElementById('exampleInputPassword1').value
        };
        this.props.actions.login(data);
    }
    componentWillMount(){
        if(this.props.user){
            if(this.props.user.isAuthenticated) browserHistory.push('/');
        }
    }
    render() {
        console.log(this.props.user);
        return(
            <div className={'container-form'}>
                <div className="form-horizontal">
                    <h4>Login</h4>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="control-label">Email address</label>
                            <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="control-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmitClick.bind(this)}>Submit</button>
                </div>
                <p>If you don`t have an account <Link to={'/signup'}>sigh up</Link>!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
