import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onSelected}) => {
  return (
    <div onClick={() => onSelected(type)} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
