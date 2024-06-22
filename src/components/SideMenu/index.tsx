import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material';
import { Home, Settings, Info } from '@mui/icons-material'; // Example icons from Material-UI

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

export const SideMenu = () => {
  return (
    <StyledDrawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};
