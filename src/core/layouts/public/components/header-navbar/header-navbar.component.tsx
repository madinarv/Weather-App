import { useHeaderNavbarStyles } from './header-navbar.style';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../../../../router/routes';
import logo from '../../../../../assets/images/statics/logo.svg';

const HeaderNavbarComponent = () => {
  const classes = useHeaderNavbarStyles();

  return (
    <div className={`${classes.navbar} pt-60`}>
      <div className='row align-center'>
        <div className='col-12'>
          <div className={classes.main}>
            <p>Weather Application</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbarComponent;
