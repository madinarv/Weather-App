import { createUseStyles } from 'react-jss';

const style = {
  appContainer: {
    marginTop: '30px',
  },
  weathersBoxes: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  weather: {},
  weatherImg: {
    margin: '20px 0px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  box: {
    color: 'white',
    backgroundImage: 'linear-gradient(115deg, #130754 0%, #3b2f80 100%)',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px',
    borderRadius: '25px',
  },
  info: {},
  total: {
    display: 'flex',
    fontSize: '20px',
    margin: '25px 0px 0px 0px',
    '& p': {},
  },
  percent: {},
  city: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
  },
  degree: {
    fontSize: '50px',
    '& p': {},
  },
  date: {
    paddingTop: '5px',
  },
  year: {
    marginBottom: '10px',
    fontSize:'20px',
  },
  hour: {
    '& span': {},
  },
  wind: {
    '& p': {},
  },
  humidity: {
    marginRight: '20px',
    '& span': {
      fontSize: '15px',
    },
  },
  speed: {
    '& span': {
      fontSize: '15px',
    },
  },
  desc: {},
};

export const useWeatherStyles = createUseStyles(style);
