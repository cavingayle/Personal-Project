import axios from 'axios'

const logout = () => {
  axios.post("/api/logout").then(response => {
      if(response.data === "logged out"){
          window.location.href = '/'
      }
  })
}
export default logout