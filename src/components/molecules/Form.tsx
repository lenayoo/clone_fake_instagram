import { Button } from "@mui/material";
import { CustomTextField } from "../atoms/TextField";
import { ImageInput } from "../atoms/ImageInput";
import { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [photo, setPhoto] = useState<FileList | null>(null);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const photoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setPhoto(e.target.files);
  };

  return (
    <form className="flex flex-col">
      <CustomTextField
        label="What happen today"
        value={title}
        changeHandler={titleChangeHandler}
      />
      <ImageInput imageChangeHandler={photoChangeHandler} value={photo} />
      <Button>Submit</Button>
    </form>
  );
};
