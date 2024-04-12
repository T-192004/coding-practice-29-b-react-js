// Write your JS code here
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const getJWTToken = async () => {
    const userDetails = { username: "rahul", password: "rahul@2021" }
    const url = "https://apis.ccbp.in/login"
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.jwt_token
  }

  const onClickLogin = async () => {
    const jwtToken = await getJWTToken()
    console.log(jwtToken)
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30
    })
    history.replace('/')
  }
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login">
      <h1>Please Login</h1>
      <button onClick={onClickLogin} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
