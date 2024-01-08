import MUILink from '@mui/material/Link';

const Link = ({ children, ...rest }) => {
  return <MUILink {...rest}>{children}</MUILink>;
};

export default Link;
