// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="btn" onClick={logoutBtn} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
