export const createEvent = (event) => {

  return (dispatch, getState) => {

    let token = getState().firebase.auth.stsTokenManager.accessToken;
    let user = getState().firebase.auth.email;

    event = { ...event, createdBy: user }

    var axios = require('axios');
    var data = JSON.stringify(event);

    var config = {
      method: 'post',
      url: 'https://dschit.herokuapp.com/events',
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
        if (response.status === 200) {
          alert(response.data.msg)
        } else {
          alert(response)
        }
        dispatch({ type: 'LOADED' });
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
        dispatch({ type: 'LOADED' });
      });

  }
};