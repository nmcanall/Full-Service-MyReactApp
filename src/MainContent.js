import React from "react"

function MainContent() {
    return (
      <div className='body'>
        <h1>Nathan's Tool Shed</h1>
        <MyList/>
        <p className='what-we-do'>Nathan's Tool Shed is a small, local business here to provide all your tool and machinery needs.  Gutters falling off? Ask Nathan for some gutter clamps.  Driveway icy? We'll hook you up with a new shovel, scraper, and blower (discounted as a package of course).  Time to replace that old chop saw? Replace with a better model while trading in your old, broken saw.  Whatever your needs, we're here to provide!</p>
      </div>
    )
}

function MyList() {
  return (
    <ol className='who-we-are'>
      <li>Best in value</li>
      <li>Huge selection</li>
      <li>Small, local business</li>
      <li>Exceptional customer service</li>
    </ol>
  )
}

export default MainContent;