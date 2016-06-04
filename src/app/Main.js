import React from 'react'
import MyTileList from './containers/MyTileList'
import MyAppBar from './components/MyAppBar'
import {deepOrange500} from 'material-ui/lib/styles/colors'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

// const styles = {
//   container: {
//     paddingLeft: 500,
//     paddingTop: 200,
//   },
// }

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
           <div>
             <MyAppBar />
             <MyTileList />
           </div>
         </MuiThemeProvider>
)

export default Main
