import * as React from 'react';
import './buttom-bar.scss'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function ButtomBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        disableRipple
        className='buttom_bar'
        sx={{display: 'block' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        PRODUCTS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>SURFBOARDS</MenuItem>
        <MenuItem onClick={handleClose}>SUP</MenuItem>
        <MenuItem onClick={handleClose}>BODYBOARDS</MenuItem>
        <MenuItem onClick={handleClose}>ACCESORIES</MenuItem>
      </Menu>
    </div>
  );
}