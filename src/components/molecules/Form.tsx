import { Button } from "@mui/material";
import { CustomTextField } from "../atoms/TextField";
import { ImageInput } from "../atoms/ImageInput";

export const Form = () => {
  const titleChangeHandler = () => {};
  const photoChangeHandler = () => {};

  return (
    <form className="flex flex-col">
      <CustomTextField
        label="What happen today"
        value="value"
        changeHandler={titleChangeHandler}
      />
      <ImageInput imageChangeHandler={photoChangeHandler} />
      <Button>Submit</Button>
    </form>
  );
};
