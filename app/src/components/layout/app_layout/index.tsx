import {
  Grid,
  Divider,
  Box,
  Menu,
  MenuItem,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import * as React from 'react';
import { Icon } from '@iconify/react';
import NavBar from './navbar';
import LeftSider from './sidebar/left-sider';
import RightSider from './sidebar/right-sider';
import type { ReactNodeProps } from './types';
import {
  useRouteLoaderData,
  Link,
  useMatches,
  useLocation,
} from '@remix-run/react';

const AppLayout = ({ children }: ReactNodeProps) => {
  const data = useRouteLoaderData('root');
  const user = data?.userObject;
  const match = useMatches();
  const route = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      label: 'Profile',
      icon: <Icon icon="mdi:person-circle" />,
      route: `/profile/${user?.username}`,
    },
    {
      label: 'Setting',
      icon: <Icon icon="uil:setting" />,
      route: '',
    },
    {
      label: 'Logout',
      icon: <Icon icon="ic:twotone-logout" />,
      route: '/logout',
    },
  ];
  return (
    <React.Fragment>
      <Grid>
        <Grid item xs={1} lg={1} md={1} sm={1}>
          <LeftSider>
            <Box
              p={1}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100vh',
              }}
            >
              <Box>
                <img
                  src="https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/logo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Box>
              {user?.username && (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Icon icon="uil:setting" width="26" height="26" />
                  <Avatar
                    src={user?.photoUrl}
                    alt={user?.username}
                    sx={{
                      width: 24,
                      height: 24,
                      mt: 1,
                      cursor:'pointer'
                    }}
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {menuItems.map((menu, idx) => (
                      <MenuItem
                        key={idx}
                        sx={{ color: 'black', cursor: 'pointer' }}
                      >
                        {menu.icon}
                        {menu.label === 'Logout' ? (
                          <form action="/logout" method="post">
                            <Button
                              type="submit"
                              sx={{
                                fontWeight: '400',
                                fontSize: '10px',
                                lineHeight: '13px',
                                marginLeft: '5px',
                              }}
                            >
                              Logout
                            </Button>
                          </form>
                        ) : (
                          <Link to={menu.route}>
                            <Button
                              sx={{
                                fontWeight: '400',
                                fontSize: '10px',
                                lineHeight: '13px',
                                marginLeft: '5px',
                              }}
                            >
                              {menu.label}
                            </Button>
                          </Link>
                        )}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
            </Box>
          </LeftSider>
        </Grid>
      </Grid>

      <div style={{ width: `calc(100vh-50px)`, marginLeft: 50 }}>
        <NavBar />
        {(user?.username || match[1].pathname !== '/login') && (
          <RightSider>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              color="gray"
            >
              <Icon
                icon="material-symbols:mic-outline-rounded"
                width="26"
                height="26"
                style={{ marginTop: '10px' }}
              />
              <Icon
                icon="material-symbols:volume-up-outline"
                width="26"
                height="26"
                style={{ marginTop: '10px' }}
              />
              <Icon
                icon="material-symbols:graphic-eq"
                width="26"
                height="26"
                style={{ marginTop: '10px' }}
              />
              <Icon
                icon="material-symbols:note-rounded"
                width="26"
                height="26"
                style={{ marginTop: '10px' }}
              />
              <Divider />
            </Box>
          </RightSider>
        )}
        {children}
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
