import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from '../../actions/UserActions'

export class Home extends Component{
    render() {
        return(
            <div className="container body-content">
                <div className="jumbotron">
                    <h1>Chat</h1>
                    <p className="lead">Chat is a free chat where you can find new friends and message them!</p>
                    <p><Link to={(this.props.user.isAuthenticated) ? "/chats" : '/login'} className="btn btn-outline-secondary btn-lg">Begin chatting! &raquo;</Link></p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <h2>Your friends</h2>
                        <p>
                            Manage your friends list, start chatting with them, check if they are online! Just go and look!
                        </p>
                        <p><Link className="btn btn-outline-secondary" to={(this.props.user.isAuthenticated) ? "/friends" : '/login'}>My friends &raquo;</Link></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Get more friends</h2>
                        <p>Find new friends with our search! Just invite them and wait until they answer you!</p>
                        <p><Link className="btn btn-outline-secondary" to={(this.props.user.isAuthenticated) ? "/find_friends" : '/login'}>Find friends &raquo;</Link></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Invitations</h2>
                        <p>Look at people who want to add you as a friend! Just apply their invitations and message them!</p>
                        <p><Link className="btn btn-outline-secondary" to={(this.props.user.isAuthenticated) ? "/invitations" : '/login'}>My invitations &raquo;</Link></p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
