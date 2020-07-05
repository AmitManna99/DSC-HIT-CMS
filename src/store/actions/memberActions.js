export const createMember = (member) => {

  return (dispatch, getState) => {

    let token = getState().firebase.auth.stsTokenManager.accessToken;
    let user = getState().firebase.auth.email;

    member = { ...member, createdBy: user }
    var axios = require('axios');
    var data = member;
    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://dschit-staging.herokuapp.com/team',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data: data
    };

    dispatch({ type: 'LOADING' });
    axios(config)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          alert(response.data.msg)
        } else {
          alert(response)
        }
        dispatch({ type: 'LOADED' }); dispatch({ type: 'LOADED' });
      })
      .catch(function (err) {
        console.log(err);
        alert(err)
        dispatch({ type: 'LOADED' });
      });

  }
};