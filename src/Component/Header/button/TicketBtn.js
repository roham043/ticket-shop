import * as React from 'react';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import styles from "./btnStyle.module.css"
import { ReactComponent as Expandmore } from '../../../assets/icons/expandmore.svg';
import Box from "@mui/material/Box";
import { useDispatch } from 'react-redux';
import images from '../image';


export default function TicketBtn() {
  const array = [0,1,2,3,4,5,6]
 
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
    dispatch({type:e.target.id,payload:e.target.id})
    
  };

  return (
    <div>
      <Box sx={{ borderLeft: 0.5, borderColor: '#bdbdbd' }}>
        <Button sx={{ color: "black" }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          بلیط< Expandmore />
        </Button>
      </Box>
      <Menu 
      className={styles.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <button onClick={handleClose} name="Domesticflight" id='0'>پرواز داخلی</button>
        <button onClick={handleClose} name="internationalflight" id='1'>پرواز خارجی </button>
        <button onClick={handleClose} name="train" id='2'>قطار</button>
        <button onClick={handleClose} name="bus" id='3'>اتوبوس</button>
      </Menu>
    </div>
  );
}