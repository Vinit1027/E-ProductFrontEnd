import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShopRating from './ShopRating';
import ShopPriceSlider from './ShopPriceSlider';

export default function ShopAccord({ CategoryShopData }) {
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
          <h3 className='catname' style={{ margin : '0', fontWeight : '600!important', fontSize : '18px!important'}}>Categories</h3>
        </AccordionSummary>
        <AccordionDetails>
            <div>
                <div className='catbox'>
                    <button className='catclr' style={{ cursor : 'pointer'}} onClick={()=> CategoryShopData('All')}>All</button>
                </div>
                <div className='catbox'>
                    <button className='catclr' style={{ cursor : 'pointer'}} onClick={()=> CategoryShopData('Mobile Phones')}>Mobile Phones</button>
                </div>
                <div className='catbox'>
                    <button style={{ cursor : 'pointer'}} className='catclr' onClick={()=> CategoryShopData('Footwear')}>Footwear</button>
                </div>
                <div className='catbox'>
                    <button style={{ cursor : 'pointer'}} className='catclr' onClick={()=> CategoryShopData('Books')}>Books</button>
                </div>
                <div className='catbox'>
                    <button style={{ cursor : 'pointer'}} className='catclr' onClick={()=> CategoryShopData('Outerwear')}>Outerwear</button>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ padding : '24px', border : '1px solid #eae8e4!important;', borderRadius : '0!important', margin : '0!important', boxShadow : '0'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon className='catcharr'/>}
          aria-controls="panel2-content"
          id="panel2-header"
          className="catarrow"
          sx={{ padding : '0', margin : '0'}}
        >
          <h3 className='catname' style={{ margin : '0', fontWeight : '600!important', fontSize : '18px!important'}}>Rating</h3>
        </AccordionSummary>
        <AccordionDetails>
          <ShopRating/>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ padding : '24px', border : '1px solid #eae8e4!important;', borderRadius : '0!important', margin : '0!important', boxShadow : '0'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon className='catcharr'/>}
          aria-controls="panel2-content"
          id="panel2-header"
          className="catarrow"
          sx={{ padding : '0', margin : '0'}}
        >
          <h3 className='catname' style={{ margin : '0', fontWeight : '600!important', fontSize : '18px!important'}}>Price</h3>
        </AccordionSummary>
        <AccordionDetails>
          <ShopPriceSlider/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
