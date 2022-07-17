import '../styles/globals.css'
import {AuthContextProvider} from "../context/AuthContext";
import ProtectedRoute from "../Component/ProtectedRoute";
import {useRouter} from "next/router";

const noRequiredAuth = ['/','/login']

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return(
      <AuthContextProvider>
          {noRequiredAuth.includes(router.pathname) ? (
              <Component {...pageProps} />
          ) : (
              <ProtectedRoute>
                  <Component {...pageProps} />
              </ProtectedRoute>
          )}

      </AuthContextProvider>
  )
}

export default MyApp
