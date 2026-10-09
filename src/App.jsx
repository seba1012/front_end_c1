import { AppBar, Toolbar, Typography } from "@mui/material"
import MordorContainer from "./containers/MordorContainer"


function App() {
  return (
    <>
      <AppBar position="static" >
        <Toolbar sx={{ justifyContent: 'space-between' }} >
          <Typography variant="h6" >Anillo Único</Typography>
          <Typography variant="h6">Uno para dominarlos a todos</Typography>
        </Toolbar>
      </AppBar>
      <MordorContainer />
    </>
  )
}

export default App
