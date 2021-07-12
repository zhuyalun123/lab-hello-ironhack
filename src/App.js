import './App.css';
import Header from './Header'
import Card from './Card'
import Titlebody from './Title'





function App() {
  return (
    <>
      <Header />
      <hr></hr>
      <Titlebody myTitleText="Say Hello to ReactJS"
        myTitleSubText="Listado de cards de usuarios"
      />

      <section className="section">
        <Card
          href="1"
          title="Declarative"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
        />

        <Card
          href="2"
          title="Declarative"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
        />

        <Card
          href="3"
          title="Declarative"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
        />

        <Card
          href="4"
          title="Declarative"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
        />



      </section>

    </>

  );
}

export default App;
