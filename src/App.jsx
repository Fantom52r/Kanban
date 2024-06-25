
import './App.css'

import { GlobalStyles } from './styles/global.styled'
import { Wrapper } from './styles/common.styled'
import AppRoutes from './Routes'


function App() {

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AppRoutes />


      </Wrapper>
    </>
  )
}

export default App
