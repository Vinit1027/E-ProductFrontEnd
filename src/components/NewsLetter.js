import React from 'react'

const NewsLetter = () => {
  return (
    <>
        <section className='mainbox topline'>
            <div>
                <div>
                    <div className='newsbox'>
                        <h5>Join Our Newsletter</h5>
                        <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
                    </div>
                    <div className='emailbox'>
                        <form className='emcon'>
                            <div>
                                <div>
                                    <input type="email" className='emweek' placeholder="Enter email for weekly newsletter." spellcheck="false" required=""/>
                                </div>
                            </div>
                            <div>
                                <button className='newsbutton'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NewsLetter