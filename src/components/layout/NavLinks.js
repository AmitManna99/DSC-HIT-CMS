import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const NavLinks = (props) => {

  return (
    <div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#" className="nav-link grey-text text-lighten-3"><b>user : </b> {props.auth.email}</a></li>
        <li><a href="#" className="nav-link grey-text text-lighten-3" onClick={props.signOut}><b>Log Out</b></a></li>
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