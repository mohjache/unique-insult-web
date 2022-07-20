import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      minHeight: '75vh'           
    }    
  })
);

const Home: React.FC = () => {    
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>Home Component!</h1>
        </div>
    )
} 

export default Home;
