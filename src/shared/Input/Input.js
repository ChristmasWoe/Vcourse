import MUIInput from '@mui/material/Input';

const Input = ({ type, value, onChange, ...rest }) => {
  return <MUIInput type={type} value={value} onChange={onChange} {...rest} />;
};

export default Input;
