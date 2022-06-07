import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type PropTypes = {
  barWeight: number;
  updateBarWeight: React.Dispatch<React.SetStateAction<number>>;
};

export const BarWeight = (props: PropTypes) => {
  const handleChange = (e: SelectChangeEvent<number>) => {
    props.updateBarWeight(e.target.value as number);
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        marginLeft: 1,
        marginRight: { xs: 1, sm: 0 },
      }}
    >
      <FormControl fullWidth margin="dense">
        <InputLabel id="demo-simple-select-label">Bar Weight</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.barWeight}
          label="Bar Weight"
          onChange={handleChange}
        >
          <MenuItem value={35}>35lbs</MenuItem>
          <MenuItem value={45}>45lbs</MenuItem>
          <MenuItem value={55}>55lbs</MenuItem>
          <MenuItem value={60}>60lbs</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
