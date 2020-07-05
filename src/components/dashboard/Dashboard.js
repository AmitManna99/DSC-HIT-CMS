import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Loader = () => <div><div className="progress blue accent-3"><div className="indeterminate blue"></div></div></div>;

class Dashboard extends Component {

  render() {

    const loading = this.props.loading;
    const {auth} = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    if (loading) return <Loader />

    return (

      <div className="dashboard container">
        <div className="row">

          <div className="col s12 m6 l3">
            <Link to="/add-event">
            <div className="card" id="dashboard-card">
              <div className="card-image" >
                <img src="https://img.icons8.com/color/144/000000/event-accepted.png" alt="event_icon" />
                <span className="btn-floating halfway-fab waves-effect waves-light red" to="/add-event"><i className="material-icons">add</i></span>
              </div>
              <div className="card-content center-align">
                <span className="flow-text  "><b>EVENT</b></span>
              </div>
            </div>
            </Link>
          </div>

          <div className="col s12 m6 l3">
          <Link to="/add-member">
            <div className="card" id="dashboard-card">
              <div className="card-image" >
                <img src="https://img.icons8.com/color/144/000000/group-background-selected.png" alt="event_icon" />
                <span className="btn-floating halfway-fab waves-effect waves-light red"  to="/add-member"><i className="material-icons">add</i></span>
              </div>
              <div className="card-content center-align">
                <span className="flow-text  "><b>MEMBER</b></span>
              </div>
            </div>
            </Link>
          </div>

          <div className="col s12 m6 l3">
          <Link to="/add-project">
            <div className="card" id="dashboard-card">
              <div className="card-image" >
                <img src="https://img.icons8.com/color/144/000000/project-management.png" alt="event_icon" />
                <span className="btn-floating halfway-fab waves-effect waves-light red" to="/add-project"><i className="material-icons">add</i></span>
              </div>
              <div className="card-content center-align">
                <span className="flow-text  "><b>PROJECT</b></span>
              </div>
            </div>
            </Link>
          </div>

          <div className="col s12 m6 l3">
          <Link to="/add-resource">
            <div className="card" id="dashboard-card">
              <div className="card-image" >
                <img src="https://img.icons8.com/color/144/000000/e-learning.png"alt="event_icon" />
                <span className="btn-floating halfway-fab waves-effect waves-light red" to="/add-resource"><i className="material-icons">add</i></span>
              </div>
              <div className="card-content center-align">
                <span className="flow-text  "><b>RESOURCE</b></span>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
    loading: state.loading.loading
  }
}

export default compose(connect(mapStateToProps))(Dashboard)