import * as React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import images from '../image';
import { useDispatch } from 'react-redux';

export default function TourBtn() {
  const dispatch = useDispatch();

  const btnchangecolor = (e) => {
    const filterImage = images.filter(data => data.title === e.target.name)
    const filteraddress = filterImage.map(data => { return (data.image) });
    const filtertitle = filterImage.map(data => { return (data.title) })
    dispatch({ type:filtertitle[0], payload: filteraddress[0] });

  }
  return (
    <div>
      <Box sx={{ borderLeft: 0.5, borderColor: '#bdbdbd' }}>
        <Button name="tour" id='4' onClick={btnchangecolor} sx={{ color: "black" }}
        >
          تور
        </Button>
      </Box>
    </div>
  );
}