import colors from '../../../../../assets/styles/abstracts/color';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
  navbar: {
    zIndex: '999',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    '& p': {
      color: 'white',
        marginBottom: '45px',
      // display: 'block',
      // width: rem(170),
      // height:rem(70),
    },
    '& img': {
      // display: 'block',
      // width: rem(170),
      // height:rem(70),
    },
  },
};

export const useHeaderNavbarStyles = createUseStyles(styles);
