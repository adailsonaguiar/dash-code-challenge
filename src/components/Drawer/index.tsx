import { Divider, IconButton, List, Toolbar, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import {ChevronLeft, Menu} from '@mui/icons-material';
import { mainListItems } from '../../components/ListItems';

export const drawerWidth: number = 240;

export const DrawerContainer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
);

type DrawerProps = {
    open: boolean;
    toggleDrawer: () => void;
}

export const Drawer = ({open, toggleDrawer}: DrawerProps) => {
    return (
        <DrawerContainer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeft /> : <Menu />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
        </List>
      </DrawerContainer>
    )
}