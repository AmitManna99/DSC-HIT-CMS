import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const NavLinks = (props) => {

  return (
    <div>
      <a href="#" data-target="slide-out" className="sidenav-trigger right" id="nav-menu"><i className="material-icons grey-text text-lighten-3">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><span className="nav-link"><i class="material-icons">account_circle</i> {props.auth.email}</span></li>
        <li><a href="#" onClick={props.signOut}><span className="nav-link">LOG OUT<i class="material-icons">exit_to_app</i></span></a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(NavLinks)