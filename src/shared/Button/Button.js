import MUIButton from '@mui/material/Button';

const Button = ({
  className,
  variant,
  color,
  size,
  onClick,
  children,
  ...rest
}) => {
  return (
    <MUIButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
