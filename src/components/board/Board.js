// STYLE
import './Board.scss';

// COMPONENTS
import Button from '../button/Button';

const Board = ({ buttons, onButtonClick, theme }) => {

  const styles = {
    1:{
      grid:{
        backgroundColor: 'hsl(223, 31%, 20%)'
      }
    },
    2:{
      grid:{
        backgroundColor: 'hsl(0, 5%, 81%)'
      }
    },
    3:{
      grid:{
        backgroundColor: 'hsl(268, 71%, 12%)'
      }
    },
  }

  return (
    <div style={styles[theme].grid} className='boardGrid'>
      {buttons.map((button) =>
        button.type === 'number' ? (
          <Button
            key={button.id}
            type={button.type}
            value={button.value}
            strVal={button.strVal}
            id={button.id}
            onButtonClick={onButtonClick}
            theme={theme}
          />
        ) : (
          <Button
            key={button.id}
            type={button.type}
            strVal={button.strVal}
            id={button.id}
            onButtonClick={onButtonClick}
            theme={theme}
          />
        )
      )}
    </div>
  );
};

export default Board;
