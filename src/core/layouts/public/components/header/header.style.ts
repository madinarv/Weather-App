import {createUseStyles} from 'react-jss';

const styles = {
  header: {
    // position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 100,
    left: 0,
    backgroundColor: '#020024',
  },
  header_custom_col:{
    zIndex:'999999'
  }
};

export const useHeaderStyles = createUseStyles(styles);
