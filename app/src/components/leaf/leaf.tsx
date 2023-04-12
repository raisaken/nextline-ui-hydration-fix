import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { leaf } from './leafs';
import { Link, useNavigate, useParams } from '@remix-run/react';
import randomColor from 'randomcolor';
import moment from 'moment';

function Leaf(props: leaf) {
  var color = randomColor();
  const params = useParams();
  const { user } = params;
  const navigate = useNavigate();
  const { id, title, date, tag, activeItem, onSetActiveItem } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleActiveItem = (id: number) => {
    onSetActiveItem(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    {
      label: 'View Details',
      onclick: () => {
        setAnchorEl(null);
        navigate(
          `/profile/${user}/${id}/${title
            .toLocaleLowerCase()
            .split(' ')
            .join('-')}/view-details`
        );
      },
      icon: (
        <Icon
          icon="icon-park-outline:preview-open"
          style={{ paddingRight: 10 }}
        />
      ),
    },
    {
      label: 'Bookmark',
      onclick: () => {},
      icon: (
        <Icon
          icon="material-symbols:bookmark-outline-sharp"
          style={{ paddingRight: 10 }}
        />
      ),
    },
    {
      label: 'Share',
      onclick: () => {},
      icon: (
        <Icon
          icon="material-symbols:share-outline-sharp"
          style={{ paddingRight: 10 }}
        />
      ),
    },
    {
      label: 'Remove',
      onclick: () => {},
      icon: (
        <Icon
          icon="material-symbols:delete-forever-outline"
          style={{ paddingRight: 10 }}
        />
      ),
    },
  ];
  const getColor = (type) => {
    switch (type) {
      case 'Classical':
        return 'red';
      case 'Romantic':
        return 'purple';
      case 'Country':
        return 'blue';
      case 'Funk':
        return 'red';
      case 'HipHop':
        return 'red';
      case 'Metal':
        return 'red';
      case 'Retro':
        return 'red';
      case 'Rock':
        return 'red';
      case 'Suspence':
        return 'red';
      case 'Thriller':
        return 'orange';
      default:
        return 'green';
    }
  };
  return (
    <Box
      p={1}
      display={'flex'}
      justifyContent="space-between"
      sx={{
        backgroundColor: `${id === activeItem ? '#fdf6f1' : 'white'}`,
        cursor: 'pointer',
        marginTop: '10px',
      }}
      className="leafCard"
    >
      <Box>
        <Box display={'flex'} alignItems={'center'}>
          <Link to={id + '/' + title.toLocaleLowerCase().split(' ').join('-')}>
            <Typography
              variant="subtitle2"
              fontWeight={'600'}
              // lineHeight={'0.5'}
              paddingRight={2}
              color="black"
              onClick={() => handleActiveItem(id)}
            >
              {title?.toUpperCase()}
            </Typography>
          </Link>
          <Button
            variant="contained"
            sx={{
              backgroundColor: getColor(tag),
              padding: '0px 8px',
              minWidth: 'fit-content',
              height: '15px',
              fontSize: '9px',
            }}
          >
            {tag}
          </Button>
        </Box>
        <Typography
          lineHeight={'1'}
          component="span"
          sx={{
            fontWeight: '400',
            fontSize: '8px',
            lineHeight: '10px',
          }}
        >
          {moment(date, 'YYYYMMDD').fromNow()}
        </Typography>
      </Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="morevert"
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
  );
}

export default Leaf;
