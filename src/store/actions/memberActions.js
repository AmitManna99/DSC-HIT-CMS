//import axios from 'axios'

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
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          alert("Member Added to Database");
        })
        .catch(function (err) {
          console.log(err);
          alert("There is an Error!!\n",err);
        });
  
    }
  };