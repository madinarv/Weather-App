import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import './header.style';
import HeaderSubComponent from '../header-sub/header-sub.component';
import {useHeaderStyles} from './header.style';

const HeaderComponent = () => {
    const classes = useHeaderStyles();
    return (
        <div className={classes.header}>
            <div className='container'>
                <div className='row'>
                    <div className={`${classes.header_custom_col} col-12 p-0`}>
                        <HeaderNavbarComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HeaderComponent;
