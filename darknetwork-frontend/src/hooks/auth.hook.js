import {
  useState
} from 'react'



export const useAuth = () => {
  const [token, setToken] = useState(false)

  return {
    token,
    setToken
  }
}