import { style } from 'typestyle';

export const headerClass = style({
    backgroundColor: 'white',
    boxShadow: '0 6px 20px 0 rgba(23,33,46,0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 32px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    userSelect: 'none',
    height: 104
});

export const logoBoxClass = style({
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
});

export const logoClass = style({
    width: 55
});

export const contentClass = style({
    maxWidth: 1208,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '130px 32px 220px 32px'
});


