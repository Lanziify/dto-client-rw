import axios from '@/api/axios'
import { auth } from '@/firebase-config'
import { signInWithEmailAndPassword, signOut, UserInfo } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

interface AuthProverProps {
  children: React.ReactNode
}

interface LoginType {
  email: string
  password: string
}

interface AuthContextType {
  user: UserInfo | null | undefined
  isUserLoading: boolean
  loginUser: (value: LoginType) => Promise<void>
  logoutUser: () => void
  userClaims: {} | any | null
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  isUserLoading: false,
  loginUser: async () => {},
  logoutUser: () => {},
  userClaims: null,
})

const authentication: React.FC<AuthProverProps> = ({ children }) => {
  const [user, isUserLoading, _] = useAuthState(auth)
  const [userClaims, setUserClaims] = React.useState<{} | null>(null)

  const loginUser = async (values: { email: string; password: string }) => {
    try {
      const isVerified = (await axios.get(`verified?email=${values.email}`)).data
      if(isVerified) {
        await signInWithEmailAndPassword(auth, values.email, values.password)
      }
    } catch (error) {
      throw error
    }
  }

  const logoutUser = () => signOut(auth)

  React.useEffect(() => {
    if (user) {
      user.getIdTokenResult().then((token) => {
        setUserClaims(token.claims)
      })
    } else {
      setUserClaims(null)
    }
  }, [user])
  
  return (
    <AuthContext.Provider
      value={{ user, isUserLoading, userClaims, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { authentication as AuthenticationProvider }

export const useAuth = () => React.useContext(AuthContext)
