import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './components/logInForm/LoginForm'
import SignUp from './components/signUpForm/SignUpOverlay/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { initGA, PageView } from './utils/analytics'
import FamilyProfile from './components/UserDash/FamilyProfile'
import NeighborProfile from './components/UserDash/NeighborProfile'
import { PrivateRoute } from './utils/customRoutes'
import Map from './components/AdminDash/Map/Map'
// temporary sign up confirmation, will be replaced with user dashboard
import ConfirmationPage from './components/signUpForm/ConfirmationPage/ConfirmationPage'
import SegmentOne from './components/UserDash/Training/SegmentOne'
import Letter from './components/UserDash/Training/Letter'
import SegmentTwo from './components/UserDash/Training/TrainingTwo'
import SegmentThree from './components/UserDash/Training/TrainPart3'
import SegmentFour from './components/UserDash/Training/TrainingPartFour'
function App() {
  useEffect(() => {
    initGA('UA-159166357-1')
    PageView()
  }, [])
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <Route path='/training/0' component={Letter} />
        <Route path='/training/1' component={SegmentOne} />
        <Route path='/training/2' component={SegmentTwo} />
        <Route path='/training/3' component={SegmentThree} />
        <Route path='/training/4' component={SegmentFour} />
        <Route path='/map' component={Map} />
        <Route path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/dashboard' component={AdminDash} />
        <Route path='/confirmation' component={ConfirmationPage} />
        <PrivateRoute path='/neighbor/:id' component={NeighborProfile} />
        <PrivateRoute path='/family/:id' component={FamilyProfile} />
      </ThemeProvider>
    </>
  )
}

export default App
