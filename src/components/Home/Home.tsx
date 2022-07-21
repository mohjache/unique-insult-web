import React, {useState} from 'react'
import {createStyles, makeStyles} from '@mui/styles'
import {Button, Typography} from '@mui/material'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    wordContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      marginBottom: '1em',
    },
    buttonContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      marginBottom: '1em',
      minHeight: '4em',
    },
  }),
)

const Home: React.FC = () => {
  const [currentInsult, setCurrentInsult] = useState('Click Button')
  const classes = useStyles()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setCurrentInsult('Clicked')
  }
  return (
    <div className={classes.container}>
      <div className={classes.wordContainer}>
        <Typography variant="h3">{currentInsult}</Typography>
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={handleClick}>
          <Typography variant="button">New Insult</Typography>
        </Button>
      </div>
    </div>
  )
}

export default Home
