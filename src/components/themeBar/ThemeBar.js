// STYLE
import './ThemeBar.scss';

const ThemeBar = ({theme, changeTheme}) => {

  const handleClick = () => {
    changeTheme();
  }

  const styles = {
    1: {
      themeBar: {
        color: '#FFF',
      },
      toggle: {
        backgroundColor: '#d03f2f'
      },
      toggleBcknd: {
        backgroundColor: 'hsl(223, 31%, 20%)',
        justifyContent: 'flex-start'
      }
    },
    2: {
      themeBar: {
        color: '#35352c',
      },
      toggle: {
        backgroundColor: '#ca5502'
      },
      toggleBcknd: {
        backgroundColor: 'hsl(0, 5%, 81%)',
        justifyContent: 'center'
      }
    },
    3: {
      themeBar: {
        color: '#ffe53d',
      },
      toggle: {
        backgroundColor: '#00e0d1'
      },
      toggleBcknd: {
        backgroundColor: 'hsl(268, 71%, 12%)',
        justifyContent: 'flex-end'
      }
    },
  }

  return (
    <div style={styles[theme].themeBar} className='themeBar'>
      <h4 className='themeBar__logo'>calc</h4>
      <p className='themeBar__text'>THEME</p>
      <div onClick={handleClick} className='themeBar__themeContainer'>
          <div className='numbers'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
          </div>
          <div style={styles[theme].toggleBcknd} className='toggle'>
              <div style={styles[theme].toggle} className='selector'></div>
          </div>
      </div>
    </div>
  );
};

export default ThemeBar;
