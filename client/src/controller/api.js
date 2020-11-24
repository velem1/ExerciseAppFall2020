const axios = require('axios');
const backend_url = "http://localhost:3003"; // has to be same as backend server
export function login(email, password){
  try {
    return axios.get(backend_url+"/login", {headers: {'email': email, 'password': password}});
     //
  } catch (error) {
    console.log(error)
  }

}

export function signup(firstName, lastName, dob, email, password){
  try {
    //"http://localhost:3003/signup"
    return axios.post(backend_url+ "/signup", {headers: {'firstName': firstName, 'lastName':lastName, 'dob':dob, 'email': email, 'password': password}})
  } catch (error) {
    console.log(error)
  }
}