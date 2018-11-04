import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from '../../actions/UserActions'

export class App extends Component{
    componentWillMount(){
        this.props.actions.checkCookie();
    }

    onLogoutClick(e){
        e.preventDefault(e);
        let data = {userName: this.props.user.name};
        this.props.actions.logout(data);
    }

    render() {
        const friendsRequests = this.props.user.friendsRequests || [];
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <Link className='navbar-brand' to='/'>Chat</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className = "nav-link" to={(this.props.user.isAuthenticated) ? "/chats" : '/login'}>Chats <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className = "nav-link" to={(this.props.user.isAuthenticated) ? "/friends" : '/login'}>Friends <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className = "nav-link" to={(this.props.user.isAuthenticated) ? "/find_friends" : '/login'}>Add friends <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className = "nav-link" to={(this.props.user.isAuthenticated) ? "/invitations" : '/login'}>Invitations {(friendsRequests.length > 0) ? '(' + friendsRequests.length + ')' : ''}<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                    {(this.props.user.isAuthenticated) ?
                        <div className="" id="navbarNavAltMarkup">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <span className="navbar-text">Hello, {this.props.user.name}!</span>
                                </li>
                                <li className="nav-item">
                                    <Link className = "nav-link" to={'/account'}>Account <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className = "nav-link" to={'/'} onClick={this.onLogoutClick.bind(this)}>Log out <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    :
                        <div id="navbarNavAltMarkup">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className = "nav-link" to={'/login'}>Log in <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className = "nav-link" to={'/signup'}>Sigh up <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div> }
                </nav>
                {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
