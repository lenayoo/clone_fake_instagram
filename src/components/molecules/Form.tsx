import { Button } from "@mui/material";
import { CustomTextField } from "../atoms/TextField";

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
      <CustomTextField
        label="Add your photo"
        value="value"
        changeHandler={photoChangeHandler}
      />
      <Button>Submit</Button>
    </form>
  );
};
