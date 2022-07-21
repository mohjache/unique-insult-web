import Home from 'components/Home/Home'
import {AppBar, Typography} from '@mui/material'
import {createStyles, makeStyles} from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      display: 'flex',
      minHeight: '7vh',
      borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
    },
    appBarTitle: {
      minHeight: 'inherit',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1em',
    },
  }),
)

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className="app">
      <AppBar
        aria-label="menu"
        sx={{bgcolor: 'rgba(10, 25, 41, 0.7)', boxShadow: 'none'}}
        position="fixed"
        className={classes.appBar}>
        <Typography variant="h4" className={classes.appBarTitle}>
          Poo Puffin
        </Typography>
      </AppBar>
      <Home></Home>
    </div>
  )
}

export default App
