import React from 'react'
import ProductTab2 from './ProductTab2'

const NewReleases = ({ Newdata }) => {
  return (
    <>
        <section className='mainbox'>
            <div>
                <div>
                    <ProductTab2 NewRdata={Newdata}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default NewReleases