import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({ rating }) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" size="small" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
  );
}
