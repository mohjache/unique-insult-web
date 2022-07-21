import Home from 'components/Home'
import {AppBar} from '@mui/material'
import {createStyles, makeStyles} from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      display: 'flex',
      minHeight: '7vh',
    },
  }),
)

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className="app">
      <AppBar
        aria-label="menu"
        sx={{bgcolor: '#5b616b', boxShadow: 'none'}}
        position="fixed"
        className={classes.appBar}></AppBar>
      <Home></Home>
    </div>
  )
}

export default App
