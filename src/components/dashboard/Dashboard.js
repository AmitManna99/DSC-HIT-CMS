import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Loader = () => <div><div className="progress blue accent-3"><div className="indeterminate blue"></div></div></div>;

class Dashboard extends Component {

  render() {

    const loading = this.props.loading;
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    if (loading) return <Loader />

    return (

      <div className="container">
        <div className="row hide-on-small-only">

          <div className="col m6 l3">
            <Link to="/add-member">
              <div className="card valign-wrapper z-depth-2" id="dashboard-card">
                <div class="center card-content">
                  <i class="material-icons">supervisor_account</i><br></br>
                  <span className="dashboard-text" style={{ color: '#EB4132' }}>Team</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col m6 l3">
            <Link to="/add-event">
              <div class="card valign-wrapper z-depth-2" id="dashboard-card">
                <div class="center card-content">
                  <i class="material-icons">event</i><br></br>
                  <span class="dashboard-text" style={{color: "#4086F4"}}>Events</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col m6 l3">
            <Link to="/add-project">
              <div class="card valign-wrapper z-depth-2" id="dashboard-card">
                <div class="center card-content">
                  <i class="material-icons">emoji_objects</i><br></br>
                  <span class="dashboard-text" style={{color: "#FBBD00"}}>Projects</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col m6 l3">
            <Link to="/add-resource">
              <div class="card valign-wrapper z-depth-2" id="dashboard-card">
                <div class="center card-content">
                  <i class="material-icons">developer_board</i><br></br>
                  <span class="dashboard-text" style={{color: "#069E57"}}>Resources</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row margin-top-80 hide-on-med-and-up">

          <div class="col s12">
            <Link to="/add-event">
              <div class="card-panel">
                <div class="row valign-wrapper">
                  <div class="col s2">
                    <img src="https://img.icons8.com/color/144/000000/event-accepted.png" alt="" class="circle responsive-img" />
                  </div>
                  <div class="col s8">
                    <span class="grey-text text-lighten-3">EVENTS</span>
                  </div>
                  <div class="col s2">
                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col s12">
            <Link to="/add-member">
              <div class="card-panel">
                <div class="row valign-wrapper">
                  <div class="col s2">
                    <img src="https://img.icons8.com/color/144/000000/group-background-selected.png" alt="" class="circle responsive-img" />
                  </div>
                  <div class="col s8">
                    <span class="grey-text text-lighten-3">MEMBERS</span>
                  </div>
                  <div class="col s2">
                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col s12">
            <Link to="/add-project">
              <div class="card-panel">
                <div class="row valign-wrapper">
                  <div class="col s2">
                    <img src="https://img.icons8.com/color/144/000000/project-management.png" alt="" class="circle responsive-img" />
                  </div>
                  <div class="col s8">
                    <span class="grey-text text-lighten-3">PROJECTS</span>
                  </div>
                  <div class="col s2">
                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col s12">
            <Link to="/add-resource">
              <div class="card-panel">
                <div class="row valign-wrapper">
                  <div class="col s2">
                    <img src="https://img.icons8.com/color/144/000000/e-learning.png" alt="" class="circle responsive-img" />
                  </div>
                  <div class="col s8">
                    <span class="grey-text text-lighten-3">RESOURCES</span>
                  </div>
                  <div class="col s2">
                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                  </div>
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