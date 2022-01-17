import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

function MainContent() {
  return (
    <div className='body'>
      <h1>Nathan's Tool Shed</h1>
      <MyList/>
      <p className='what-we-do'>Nathan's Tool Shed is a small, local business here to provide all your tool and machinery needs.  Gutters falling off? Ask Nathan for some gutter clamps.  Driveway icy? We'll hook you up with a new shovel, scraper, and blower (discounted as a package of course).  Time to replace that old chop saw? Replace with a better model while trading in your old, broken saw.  Whatever your needs, we're here to provide!</p>
    </div>
  )
}

function Header() {
  return (
    <header>
      <nav className='my-nav-bar'>
        <img src={require("./logo192.png")} className='logo' alt="default React logo"/>
        <ul className='nav-items'>
          <li>Offers</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      © 2022 McAnally development. All rights reserved.
    </footer>
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

export default App;