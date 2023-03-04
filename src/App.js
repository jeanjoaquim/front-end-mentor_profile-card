import Card from './components/Card';
import BgPatternTop from './images/bg-pattern-top.svg';
import BgPatternBottom from './images/bg-pattern-bottom.svg';
import './styles.css';

function App() {
  return (

    <div className='container'>
      <img src={BgPatternTop} alt='' className='bg-pattern-top'/>
      <img src={BgPatternBottom} alt='' className='bg-pattern-bottom'/>
      <Card />
    </div>
    
  );
}

export default App;
