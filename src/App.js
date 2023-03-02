import Card from './components/Card';
import BgPatternTop from './images/bg-pattern-top.svg';
import BgPatternBottom from './images/bg-pattern-bottom.svg';
import './styles.css';

function App() {
  return (

    <>
      
      <div className='container'>
        <img className='svg-top' src={BgPatternTop} alt='' />
        <img className='svg-bottom' src={BgPatternBottom} alt='' />
        <Card />
      </div>
    </>
    
  );
}

export default App;
