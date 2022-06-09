import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type PropTypes = {
  barWeight: number;
  updateTargetWeight: React.Dispatch<React.SetStateAction<string>>;
  validateForm: React.Dispatch<React.SetStateAction<boolean>>;
  targetWeight: string;
};

const TargetWeight = ({
  barWeight,
  updateTargetWeight,
  validateForm,
  targetWeight,
}: PropTypes) => {
  const [inputIsValid, setInputIsValid] = useState(false);
  const [isTouched, setisTouched] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setisTouched(true);
    const input = e.target.value;

    if (+input < barWeight) {
      setInputIsValid(false);
      validateForm(false);
    } else {
      setInputIsValid(true);
      validateForm(true);
    }
    updateTargetWeight(input);
  };

  return (
    <Box
      sx={{
        marginTop: { sm: 2 },
        marginRight: 1,
        marginLeft: { xs: 1 },
        marginBottom: { xs: 3.5, sm: 3 },
        maxHeight: "50px",
      }}
    >
      <TextField
        error={isTouched && !inputIsValid}
        helperText={
          isTouched &&
          !inputIsValid &&
          "Please enter a number greater than bar weight"
        }
        fullWidth
        id="outlined-basic"
        label="Target Weight"
        variant="outlined"
        type="number"
        onChange={handleChange}
        value={targetWeight}
      />
    </Box>
  );
};

export default TargetWeight;
