import React from 'react'

const PrivateRoute = ({children}) => {
  return (
    <div>
       loggedIn ? {children} : <>redirect to login</>
    </div>
  )
}

export default PrivateRoute