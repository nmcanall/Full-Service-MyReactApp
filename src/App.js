import './App.css';

function App() {
  return (
    <div className="App">
      <MainContent/>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <Header/>
      <PageBody/>
      <Footer/>
    </div>
  )
}

function Header() {
  return (
    <header>
      <nav>
        <img src={require("./logo192.png")} width="40px" alt="default React logo"/>
      </nav>
    </header>
  )
}

function PageBody() {
  return (
    <header>
      <h1>I love React</h1>
      <MyList/>
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
    <ol>
      <li>Absolutely nothing</li>
      <li>But there's a lot in the background</li>
      <li>MyCreateReact did it all for me</li>
      <li>But I'll make it great soon</li>
    </ol>
  )
}

export default App;