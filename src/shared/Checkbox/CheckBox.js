import MUICheckbox from '@mui/material/Checkbox';

const CheckBox = ({ label, required, disabled, ...rest }) => {
  return (
    <div className="checkbox">
      <MUICheckbox {...rest} />
      <label>{label}</label>
    </div>
  );
};

export default CheckBox;
