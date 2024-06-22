import { Badge, IconButton, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const HeaderWrapper = styled(MuiAppBar)(({theme}) => ({
  width: '100%',
  position: 'initial',
  backgroundColor: theme.palette.primary.main,
}));


export const AppBar = () => {
  return (
    <HeaderWrapper>
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </HeaderWrapper>
  )
}