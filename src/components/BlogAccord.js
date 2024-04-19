import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function BlogAccord() {
  return (
    <div>
      <Accordion sx={{ padding : '24px', border : '1px solid #eae8e4!important;', borderRadius : '0!important', margin : '0!important', boxShadow : '0'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon className='catcharr'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ padding : '0', margin : '0'}}
          className="catarrow"
        >
          <h3 className='catname' style={{ margin : '0', fontWeight : '600!important', fontSize : '18px!important'}}>Search</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className='blogseabox'>
            <input type='search' className='blogsearch' placeholder='Search...'/>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ padding : '24px', border : '1px solid #eae8e4!important;', borderRadius : '0!important', margin : '0!important', boxShadow : '0'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon className='catcharr'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ padding : '0', margin : '0'}}
          className="catarrow"
        >
          <h3 className='catname' style={{ margin : '0', fontWeight : '600!important', fontSize : '18px!important'}}>Categories</h3>
        </AccordionSummary>
        <AccordionDetails>
            <div>
                <div className='catbox'>
                    <a href='' className='catclr'>Mobile Phones</a>
                </div>
                <div className='catbox'>
                    <a href='' className='catclr'>Footwear</a>
                </div>
                <div className='catbox'>
                    <a href='' className='catclr'>Books</a>
                </div>
                <div className='catbox'>
                    <a href='' className='catclr'>Outerwear</a>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ padding : '24px', border : '1px solid #eae8e4!important;', borderRadius : '0!important', margin : '0!important', boxShadow : '0'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon className='catcharr'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ padding : '0', margin : '0'}}
          className="catarrow"
        >
          <h3 className='catname' style={{ margin : '0', fontWeight : '600!important', fontSize : '18px!important'}}>Tags</h3>
        </AccordionSummary>
        <AccordionDetails>
            <div>
              <div className='blogtagbox'>
                <a href='' className='blogtags'>Arts</a>
                <a href='' className='blogtags'>Books</a>
                <a href='' className='blogtags'>Kids</a>
                <a href='' className='blogtags'>Romance</a>
              </div>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}