import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.jsx'

import Body from './components/Body.jsx'

function App() {  
  return (
    <>
    <Provider store={appStore}>
      <Body />
    </Provider>
    </>
  )
}
export default App
