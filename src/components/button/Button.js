// STYLE
import './Button.scss';

const Button = (props) => {
  let styles;
  if (
    props.type === 'number' ||
    props.type === 'operator' ||
    props.type === 'decimal'
  ) {
    styles = {
      1: {
        button: {
          color: 'hsl(221, 14%, 31%)',
          backgroundColor: 'hsl(30, 25%, 89%)',
          boxShadow: '0px 3px 0px hsl(28, 16%, 65%)'
        },
      },
      2: {
        button: {
          color: 'hsl(60, 10%, 19%)',
          backgroundColor: 'hsl(45, 7%, 89%)',
          boxShadow: '0px 3px 0px  hsl(35, 11%, 61%)'
        },
      },
      3: {
        button: {
          color: 'hsl(52, 100%, 62%)',
          backgroundColor: 'hsl(268, 47%, 21%)',
          boxShadow: '0px 3px 0px hsl(290, 70%, 36%)'
        },
      },
    };
  } else if (props.type === 'del' || props.type === 'clear') {
    styles = {
      1: {
        button: {
          color: '#FFF',
          backgroundColor: 'hsl(225, 21%, 49%)',
          boxShadow: '0px 3px 0px hsl(224, 28%, 35%)'
        },
      },
      2: {
        button: {
          color: '#FFF',
          backgroundColor: 'hsl(185, 42%, 37%)',
          boxShadow: '0px 3px 0px hsl(185, 58%, 25%)'
        },
      },
      3: {
        button: {
          color: '#FFF',
          backgroundColor: 'hsl(281, 89%, 26%)',
          boxShadow: '0px 3px 0px hsl(285, 91%, 52%)'
        },
      },
    };
  } else {
    styles = {
      1: {
        button: {
          color: '#FFF',
          backgroundColor: 'hsl(6, 63%, 50%)',
          boxShadow: '0px 3px 0px hsl(6, 70%, 34%)'
        },
      },
      2: {
        button: {
          color: '#FFF',
          backgroundColor: 'hsl(25, 98%, 40%)',
          boxShadow: '0px 3px 0px  hsl(25, 99%, 27%)'
        },
      },
      3: {
        button: {
          color: '#FFF',
          backgroundColor: 'hsl(176, 100%, 44%)',
          boxShadow: '0px 3px 0px hsl(177, 92%, 70%)'
        },
      },
    };
  }

  const handleClick = () => {
    props.onButtonClick(props.type, props.strVal);
  };

  return (
    <button
      style={styles ? styles[props.theme].button : null}
      className={props.type}
      onClick={handleClick}
      id={props.id}
    >
      {props.strVal}
    </button>
  );
};

export default Button;
