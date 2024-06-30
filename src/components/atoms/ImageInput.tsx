import { Input } from "@mui/material";

export const ImageInput = ({
  imageChangeHandler
}: {
  imageChangeHandler: React.ChangeEventHandler;
}) => {
  return <Input type="file" onChange={imageChangeHandler} />;
};
