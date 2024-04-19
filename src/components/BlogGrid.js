import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BlogAccord from './BlogAccord';
import Blog1 from './images/Blog1.jpg';
import Blog2 from './images/Blog2.jpg';
import Blog3 from './images/Blog3.jpg';
import Blog4 from './images/Blog4.jpg';
import Blog5 from './images/Blog5.jpg';
import BlogArticleGrid from './BlogArticleGrid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BlogGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
            <div>
                <BlogAccord/>
            </div>
        </Grid>
        <Grid item md={9} xs={12}>
          <BlogArticleGrid/>
        </Grid>
      </Grid>
    </Box>
  );
}
