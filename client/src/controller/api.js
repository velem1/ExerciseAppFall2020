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

export function signup(FirstName, LastName, email, password){
  try {
    //"http://localhost:3003/signup"
    return axios.get(backend_url+ "/signup", {headers: {'FirstName': FirstName, 'LastName':LastName, 'email': email, 'password': password}})
  } catch (error) {
    console.log(error)
  }
}