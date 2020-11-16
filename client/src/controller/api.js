const axios = require('axios');
const backend_url = "http://localhost:3003"; // has to be same as backend server

export function login(email, password){
  try {
    axios.get(backend_url+"/login", {headers: {'email': email, 'password': password}}).then(function (response) {
      return response;

    })
  } catch (error) {
    console.log(error)
  }
    
}

export function signup(name, email, password){
  try {
    "http://localhost:3003/signup"
    axios.post(backend_url+ "/signup", {headers: {'name': name, 'email': email, 'password': password}}).then(function (response) {
      console.log(response.data);
    });
  } catch (error) {
        console.log(error)
  }
}