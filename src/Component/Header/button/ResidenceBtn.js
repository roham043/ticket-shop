import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { ReactComponent as Expandmore } from '../../../assets/icons/expandmore.svg';
import Box from "@mui/material/Box";
import styles from './btnStyle.module.css';
import { useDispatch } from 'react-redux';
import images from '../image';

export default function ResidenceBtn() {

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    const filterImage = images.filter(data => data.title === e.target.name)
    const filteraddress = filterImage.map(data => { return (data.image) });
    const filtertitle = filterImage.map(data => { return (data.title) })
    dispatch({ type: filtertitle[0], payload: filteraddress[0] });
  };

  return (
    <div>
      <Box sx={{ borderLeft: 0.5, borderColor: '#bdbdbd' }} >
        <Button sx={{ color: "black" }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          اقامت
          < Expandmore />
        </Button>
      </Box>
      <Menu
        className={styles.residenceMenu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <button onClick={handleClose} name="hotel">هتل</button>
        <button onClick={handleClose} name="villa">اقامتگاه </button>

      </Menu>
    </div>
  );
}