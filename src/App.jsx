
import './App.css'

import { GlobalStyles } from './styles/global.styled'
import { Wrapper } from './styles/common.styled'
import AppRoutes from './Routes'
import UserProvider from './context/UserProvider'


function App() {

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <UserProvider >
          <AppRoutes />
        </UserProvider >


      </Wrapper>
    </>
  )
}

export default App
