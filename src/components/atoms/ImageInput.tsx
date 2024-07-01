import { Input } from "@mui/material";

export const ImageInput = ({
  value,
  imageChangeHandler
}: {
  value: FileList | null;
  imageChangeHandler: React.ChangeEventHandler;
}) => {
  return <Input type="file" onChange={imageChangeHandler} value={value} />;
};
