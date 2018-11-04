import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import './styles.css'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as UserActions from '../../actions/UserActions'

export class Users extends Component{
    componentWillMount(){
        this.users = UserActions.fetchUsers(this.props.user.id);
    }

    onSubmit(e){
        e.preventDefault(e);
        if(document.getElementById('search').value){
            this.users = UserActions.fetchUser(this.props.user.id, document.getElementById('search').value);
        } else {
            this.users = UserActions.fetchUsers(this.props.user.id);
        }
        this.forceUpdate();
    }

    onChange(e){
        e.preventDefault(e);
        if(!document.getElementById('search').value){
            this.users = UserActions.fetchUsers(this.props.user.id);
        }
        this.forceUpdate();
    }

    addFriend(id){
        let data = {userID: this.props.user.id,
            destinationUserID: id};
        this.props.actions.requestFriend(data);
        this.forceUpdate();
    }


    render() {
        let users = this.users || [];
        let usersArray = users.map(user => {
            return(
              <div className={'list-group-item flex-column align-items-start'} key={user.id}>
                  <form>
                      <div className="row">
                          <div className="col">
                              <h5 className="mb-1">{user.userName}</h5>
                              <small className={(user.status === 'online') ? 'text-success' : 'text-danger'}>{user.status}</small>
                          </div>
                          <div className="col text-right">
                              <button className="btn btn-outline-secondary" type="button" onClick={() => this.addFriend(user.id)}>Request</button>
                          </div>
                      </div>
                  </form>
              </div>
            );
        });
        return(
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id={'search'} placeholder="Search user" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onChange.bind(this)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.onSubmit.bind(this)}>Search</button>
                        </div>
                </div>
                <div className={(this.users.length === 0) ? 'none' : 'list-group'}>
                    {usersArray}
                </div>
                <div className={(this.users.length === 0) ? 'no-user-block' : 'none'} key={this.users.length}>
                    <p>There`s no such user</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
