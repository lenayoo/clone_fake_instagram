import { TextField } from "@mui/material";

export const CustomTextField = ({
  label,
  value,
  changeHandler
}: {
  label: string;
  value: string;
  changeHandler: React.ChangeEventHandler;
}) => {
  return <TextField label={label} value={value} onChange={changeHandler} />;
};
