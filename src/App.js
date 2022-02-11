// STYLE
import './App.scss';

// DATA
import { buttons } from './buttonData';

// HOOKS
import { useState } from 'react';

// COMPONENTS
import ThemeBar from './components/themeBar/ThemeBar';
import Display from './components/display/Display';
import Board from './components/board/Board';

function App() {
  const [buttonData] = useState(buttons);
  const [mainDisplay, setMainDisplay] = useState('0');
  const [topDisplay, setTopDisplay] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState(1);

  const changeTheme = () => {
    if (theme === 3) {
      setTheme(1);
    } else {
      setTheme((prev) => prev + 1);
    }
  };

  const currentOperation = (str) => {
    const splitDisplay = str.split('');
    let operationArr = [''];
    splitDisplay.forEach((char, index) => {
      let length = operationArr.length;
      if (!isNaN(char) || char === '.') {
        operationArr[length - 1] = operationArr[length - 1].concat(char);
      } else if (char === '-' && operationArr[length - 1] === '') {
        operationArr[length - 1] = operationArr[length - 1].concat(char);
      } else if (splitDisplay.length - 1 === index) {
        operationArr.push(char, '0');
      } else {
        operationArr.push(char, '');
      }
    });
    console.log(operationArr);
    return operationArr;
  };

  const calc = (arr) => {
    if (arr.includes('/')) {
      do {
        const divIndex = arr.indexOf('/');
        const divResult = arr[divIndex - 1] / arr[divIndex + 1];
        arr.splice(divIndex - 1, 3, divResult);
      } while (arr.includes('/'));
    }

    if (arr.includes('x')) {
      do {
        const multIndex = arr.indexOf('x');
        const multResult = arr[multIndex - 1] * arr[multIndex + 1];
        arr.splice(multIndex - 1, 3, multResult);
        console.log(arr);
      } while (arr.includes('x'));
    }

    if (arr.includes('-')) {
      do {
        const subIndex = arr.indexOf('-');
        console.log(subIndex);
        const subResult =
          parseFloat(arr[subIndex - 1]) - parseFloat(arr[subIndex + 1]);
        arr.splice(subIndex - 1, 3, subResult);
        console.log(arr);
      } while (arr.includes('-'));
    }

    if (arr.includes('+')) {
      do {
        const sumIndex = arr.indexOf('+');
        console.log(sumIndex);
        const sumResult =
          parseFloat(arr[sumIndex - 1]) + parseFloat(arr[sumIndex + 1]);
        arr.splice(sumIndex - 1, 3, sumResult);
        console.log(arr);
      } while (arr.includes('+'));
    }

    console.log(arr[0]);
    return arr[0];
  };

  const onButtonClick = (type, val) => {
    if (
      result !== '' &&
      type !== 'operator' &&
      type !== 'equals' &&
      type !== 'del'
    ) {
      setMainDisplay('');
      setTopDisplay('');
      setResult('');
    }
    if (type === 'clear') {
      // LOGIC FOR RESET BUTTON
      setMainDisplay('0');
      setTopDisplay('');
      setResult('');
    } else if (type === 'number') {
      // LOGIC FOR NUMBER BUTTONS
      if (val === '0') {
        if (mainDisplay === '0' || isNaN(mainDisplay)) {
          setMainDisplay(val);
        } else {
          setMainDisplay((prev) => prev + val);
        }
        if (
          topDisplay.length === 0 ||
          topDisplay === '0' ||
          /[\+|\-|x|\/]0$/.test(topDisplay)
        ) {
          setTopDisplay((prev) => prev);
        } else {
          setTopDisplay((prev) => prev + val);
        }
      } else {
        if (mainDisplay === '0' || isNaN(mainDisplay)) {
          setMainDisplay(val);
        } else {
          setMainDisplay((prev) => prev + val);
        }
        if (topDisplay === '0' || topDisplay.length === 0) {
          setTopDisplay(val);
        } else {
          setTopDisplay((prev) => prev + val);
        }
      }
    } else if (type === 'decimal' && !mainDisplay.includes(val)) {
      // LOGIC FOR DECIMAL BUTTON
      if (isNaN(mainDisplay)) {
        setMainDisplay('0' + val);
      } else {
        setMainDisplay((prev) => prev + val);
      }
      if (topDisplay.length === 0) {
        setTopDisplay('0' + val);
      } else if (/[\+|\-|\/|x]$/.test(topDisplay)) {
        setTopDisplay((prev) => prev + '0' + val);
      } else {
        setTopDisplay((prev) => prev + val);
      }
    } else if (type === 'operator') {
      // LOGIC FOR OPERATOR BUTTONS
      if (result) {
        setTopDisplay(result + val);
        setMainDisplay(val);
        setResult('');
      } else {
        setMainDisplay(val);
        if (topDisplay.length === 0) {
          setTopDisplay((prev) => '0' + val);
        } else if (/[\W|x/]\-$/.test(topDisplay) && val === '-') {
          setTopDisplay((prev) => prev);
        } else if (/[\W|x/]\-$/.test(topDisplay) && val !== '-') {
          let newTop = topDisplay.replace(/[\W|x/]\-$/, val);
          setTopDisplay(newTop);
        } else if (/[\+|\-|x|\/]$/.test(topDisplay) && val !== '-') {
          let newTop = topDisplay.replace(/[\+|\-|x|\/]$/, val);
          setTopDisplay(newTop);
        } else {
          setTopDisplay((prev) => prev + val);
        }
      }
    } else if (type === 'equals') {
      // LOGIC FOR EQUALS BUTTON
      if (topDisplay.includes('=')) {
        setTopDisplay((prev) => prev);
        setMainDisplay((prev) => prev);
      } else {
        const operation = currentOperation(topDisplay);
        const calcResult = calc(operation);
        setTopDisplay((prev) => prev + '=' + calcResult);
        setMainDisplay(calcResult);
        setResult(calcResult);
      }
    } else if (type === 'del' && !result) {
      let newTop = topDisplay.slice(0, topDisplay.length - 1);
      setTopDisplay(newTop);
      if (mainDisplay !== '0') {
        let newMain = mainDisplay.slice(0, mainDisplay.length - 1);
        setMainDisplay(newMain === '' ? '0' : newMain);
      }
    }
  };


  const styles = {
    1:{
      app: {
        backgroundColor: 'hsl(222, 26%, 31%)'
      }
    },
    2:{
      app: {
        backgroundColor: 'hsl(0, 0%, 90%)'
      }
    },
    3:{
      app: {
        backgroundColor: 'hsl(268, 75%, 9%)'
      }
    },
  }

  return (
    <div style={styles[theme].app} className='App'>
      <div className='wrapper'>
        <ThemeBar theme={theme} changeTheme={changeTheme} />
        <Display theme={theme} main={mainDisplay} top={topDisplay} />
        <Board theme={theme} buttons={buttonData} onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
