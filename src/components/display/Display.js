//STYLE
import './Display.scss';

const Display = ({ main, top, theme }) => {
  
  const styles = {
    1:{
      display:{
        backgroundColor: 'hsl(224, 36%, 15%)',
        color: '#FFF',
      }
    },
    2:{
      display:{
        backgroundColor: 'hsl(0, 0%, 93%)',
        color: 'hsl(60, 10%, 19%)',
      }
    },
    3:{
      display:{
        backgroundColor: 'hsl(268, 71%, 12%)',
        color: 'hsl(52, 100%, 62%)',
      }
    },
  }

  return (
    <div style={styles[theme].display} className='display'>
      <div className='savedDisplay'>{top}</div>
      <div id='display' className='currentDisplay'>{main}</div>
    </div>
  );
};

export default Display;
