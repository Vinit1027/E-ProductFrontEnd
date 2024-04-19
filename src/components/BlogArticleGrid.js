import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Blog1 from './images/Blog1.jpg';
import Blog2 from './images/Blog2.jpg';
import Blog3 from './images/Blog3.jpg';
import Blog4 from './images/Blog4.jpg';
import Blog5 from './images/Blog5.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BlogArticleGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item sm={5} xs={12} sx={{ marginBottom: '32px'}}>
          <div>
            <div className='blogimgbox'>
              <img className='blogimg' src={Blog1}/>
            </div>
          </div>
        </Grid>
        <Grid item sm={7} xs={12} sx={{ marginBottom: '32px'}}>
          <div>
            <div className='blogimgbox blogmargbt'>
              <div className='blogsmtitle'>
                <a href=''>Children's Book,</a> 
                <a href=''> Science & Math</a>
              </div>
              <h2 className='blogtitle'>
                American Dirt’ Invites Readers into the Journey of Mexican Migrants
              </h2>
              <p className='blogpara'>It’s nice to win awards. Last night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.</p>
              <div className='blogtime'>
                <AccessTimeOutlinedIcon sx={{ fontSize : '18px', color: '#7c6e65', marginRight: '4px'}}/>
                <a href=''>August 19, 2020</a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={5} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox'>
                    <img className='blogimg' src={Blog2}/>
                </div>
            </div>
        </Grid>
        <Grid item sm={7} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox blogmargbt'>
                    <div className='blogsmtitle'>
                        <a href=''>Arts & Photography,</a> 
                        <a href=''> Biographies & Memoirs</a>
                    </div>
                    <h2 className='blogtitle'>
                        Anne Bogel’s 5 Tips to Restore Your Love of Reading
                    </h2>
                    <p className='blogpara'>In our internet world, attention is drawn in different directions at once as we multi-task through every day.</p>
                    <div className='blogtime'>
                        <AccessTimeOutlinedIcon sx={{ fontSize : '18px', color: '#7c6e65', marginRight: '4px'}}/>
                        <a href=''>August 19, 2020</a>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item sm={5} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox'>
                    <img className='blogimg' src={Blog3}/>
                </div>
            </div>
        </Grid>
        <Grid item sm={7} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox blogmargbt'>
                    <div className='blogsmtitle'>
                        <a href=''>Arts & Photography,</a> 
                        <a href=''> Science & Math</a>
                    </div>
                    <h2 className='blogtitle'>
                        Benefits of Reading: Getting Smart, Thin, Healthy, Happy
                    </h2>
                    <p className='blogpara'>The more knowledge you have, the better-equipped you are to tackle any challenge you’ll ever face.</p>
                    <div className='blogtime'>
                        <AccessTimeOutlinedIcon sx={{ fontSize : '18px', color: '#7c6e65', marginRight: '4px'}}/>
                        <a href=''>August 19, 2020</a>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item sm={5} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox'>
                    <img className='blogimg' src={Blog1}/>
                </div>
            </div>
        </Grid>
        <Grid item sm={7} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox blogmargbt'>
                    <div className='blogsmtitle'>
                        <a href=''>Biographies & Memoirs,</a> 
                        <a href=''> Children's Books</a>
                    </div>
                    <h2 className='blogtitle'>
                        Activities of the Frankfurt Book Fair International
                    </h2>
                    <p className='blogpara'>Reading books is vital for learning new languages, as non-native speakers gain exposure to words used in context.</p>
                    <div className='blogtime'>
                        <AccessTimeOutlinedIcon sx={{ fontSize : '18px', color: '#7c6e65', marginRight: '4px'}}/>
                        <a href=''>August 18, 2020</a>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item sm={5} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox'>
                    <img className='blogimg' src={Blog4}/>
                </div>
            </div>
        </Grid>
        <Grid item sm={7} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox blogmargbt'>
                    <div className='blogsmtitle'>
                        <a href=''>Children's Book,</a> 
                        <a href=''> Romance, Science & Math</a>
                    </div>
                    <h2 className='blogtitle'>
                        The London Book Fair is to be packed with exciting
                    </h2>
                    <p className='blogpara'>Exposure to published, well-written work has a noted effect on one’s own writing.</p>
                    <div className='blogtime'>
                        <AccessTimeOutlinedIcon sx={{ fontSize : '18px', color: '#7c6e65', marginRight: '4px'}}/>
                        <a href=''>August 18, 2020</a>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item sm={5} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox'>
                    <img className='blogimg' src={Blog5}/>
                </div>
            </div>
        </Grid>
        <Grid item sm={7} xs={12} sx={{ marginBottom: '32px'}}>
            <div>
                <div className='blogimgbox blogmargbt'>
                    <div className='blogsmtitle'>
                        <a href=''>Arts & Photography,</a> 
                        <a href=''> Biographies & Memoirs, Romance</a>
                    </div>
                    <h2 className='blogtitle'>
                        Should You Feel Embarrassed for Reading Kids Books?
                    </h2>
                    <p className='blogpara'>Step away from your computer for a little while, crack open a book, and replenish your soul for a little while.</p>
                    <div className='blogtime'>
                        <AccessTimeOutlinedIcon sx={{ fontSize : '18px', color: '#7c6e65', marginRight: '4px'}}/>
                        <a href=''>August 18, 2020</a>
                    </div>
                </div>
            </div>
        </Grid>
      </Grid>
    </Box>
  );
}
