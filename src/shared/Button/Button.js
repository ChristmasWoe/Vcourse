import MUIButton from '@mui/material/Button';

const Button = ({ variant, ...rest }) => {
  return <MUIButton variant={variant} {...rest} />;
};

export default Button;
