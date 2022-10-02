import React from 'react'
import {Route, Redirect} from 'react-router-dom'
 
const ProtectedRoute = ({component: Component, ...props}) => {
  return (

        <Route>
            {
              () => {
                 return props.bearer ? ((props.loggedIn && props.path==="/admin") ? <Component {...props} /> : <Redirect to="/sign-in" />)
                                     : ((props.loggedIn && props.path==="/card") ? <Component {...props} /> : <Redirect to="/sign-in" />)
              }
            }    
        </Route>

  )
}
export default ProtectedRoute