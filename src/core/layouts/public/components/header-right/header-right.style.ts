import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';

const styles = {
    menu_list: {
        backgroundColor: colors.navbar,
        padding: [40, 15, 40, 40],
        borderRadius: rem(50),
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',

        '& a': {
            color: 'white',
            letterSpacing: rem(0.9),
            textTransform: 'capitalize',
            transition: transition(),
            '&:hover': {
                color: '#6e3f47',
            }
        },
        '& a:not(:last-child)': {
            marginRight: 15,
        },
    },
    isActive: {
        color: '#6e3f47 !important',

    }
};

export const useHeaderRightStyles = createUseStyles(styles);
