import { useUser } from './auth'
import { useEffect } from 'react'

import {updateUser} from './lib/allauth'

export default function Dashboard () {
  const user = useUser()

  
  useEffect(() => {
    updateUser()
  }
  , [])

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome user {user.display}!</p>
    </div>
  )
}
