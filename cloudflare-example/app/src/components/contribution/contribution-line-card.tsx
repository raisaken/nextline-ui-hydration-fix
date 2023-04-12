import {
  Typography,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { IconTitle, Time } from '../typography/icon-title';
import { theme } from '~/styles/theme';
import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import moment from 'moment';

export default function ContributionLineCard({ item, EditLine }: any) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuItems = [
    {
      label: 'Report',
      onclick: () => {
        setAnchorEl(null);
      },
      icon: <Icon icon="mdi:flag-variant" style={{ paddingRight: 10 }} />,
    },
  ];

  const timeDiff = (createdAt: Date) => {
    const now = moment()
    var minutes = moment.duration(now.diff(createdAt)).asMinutes()
    return minutes
  }
  const lineDataWithId={line:item?.lineData,lineId:item?.id}
  return (
    <>
      {
        item ? (
          <Box display={'flex'} >
            {
              timeDiff(item.createdAt) < 3 &&
              <Stack pl={4.5} pt={1.3} spacing={0.5} >
                <Icon icon="material-symbols:edit" height={'13px'} width={'10px'} color='#EDA43B' style={{ cursor: 'pointer' }} onClick={() => EditLine(lineDataWithId)} />
                <Typography sx={{ fontWeight: 400, fontSize: '7px', lineHeight: '8px', color: '#717171' }}>Edit</Typography>
              </Stack>
            }

            <Box
              display="flex"
              flexDirection={'column'}
              pr={2}
              pb={1}
              onClick={() => navigate('line/' + item.id)}
              sx={{ cursor: 'pointer', width: '100%', marginLeft: `${timeDiff(item.createdAt) < 3 ? '14px' : '60px'}` }}
              className="contribution_line_card"
            >
              <Box className="display-f-sb" >
                <Typography className="contribution_line">{item?.lineData}</Typography>
                <Box sx={{ cursor: 'pointer' }} display="flex">

                  <IconTitle
                    label={item?.creator?.username}
                    userColor={<Icon icon="ic:sharp-square" color="red" />}
                  />
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="morevert"
                    sx={{ p: 0, fontSize: '15px' }}
                  >
                    <Icon icon="carbon:overflow-menu-vertical" className="morevert" />
                  </IconButton>
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
                      <MenuItem onClick={menu.onclick} key={idx}>
                        {menu.icon}
                        <Typography
                          sx={{
                            fontWeight: '400',
                            fontSize: '10px',
                            lineHeight: '13px',
                          }}
                        >
                          {menu.label}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              <Stack direction={'row'} spacing={2} mt={0.5}>
                <Time time={item.createdAt} />
                <IconTitle
                  label={item.likeCount}
                  icon={
                    <Icon icon="mdi:favourite" color="red" width="20" height="20" />
                  }
                />
                <IconTitle
                  label={item.voteCount}
                  icon={
                    <Icon
                      icon="mdi:arrow-up-bold"
                      color={theme.palette?.primary.main}
                      width="20"
                      height="20"
                    />
                  }
                />
              </Stack>
            </Box>
          </Box>


        ) : (
          <Box
            display="flex"
            flexDirection={'column'}
            pl={8}
            pr={2}
            py={1}
            sx={{ cursor: 'pointer' }}
            className="contribution_line_card"
          >
            <Typography className="contribution_line">No contents added yet. Contribute to the content</Typography>
          </Box>

        )
      }

    </>

  );
}
