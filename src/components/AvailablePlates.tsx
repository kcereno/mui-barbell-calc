import React from "react";
import { Box } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: number, personName: readonly number[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type PropTypes = {
  availablePlates: number[];
  updatePlates: React.Dispatch<React.SetStateAction<number[]>>;
};

const AvailablePlates = ({ availablePlates, updatePlates }: PropTypes) => {
  const theme = useTheme();

  interface plateColorIndexSignature {
    [key: number]: string;
  }
  const plateColors: plateColorIndexSignature = {
    55: "maroon",
    45: "blue",
    35: "yellow",
    25: "green",
    15: "grey",
    10: "grey",
    5: "grey",
    2.5: "grey",
  };

  const handleChange = (event: SelectChangeEvent<typeof availablePlates>) => {
    const {
      target: { value },
    } = event;
    updatePlates(value as number[]);
  };

  const plates = [2.5, 5, 10, 15, 25, 35, 45, 55];

  return (
    <>
      <Box
        sx={{
          marginX: 1,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-multiple-chip-label">
            Available Plates
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={availablePlates}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Available Plates"
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected
                  .sort((a, b) => a - b)
                  .map((value) => {
                    const plateColor = plateColors[value];
                    return (
                      <Chip
                        key={value}
                        label={value}
                        style={{
                          backgroundColor: plateColor,
                          color: value === 35 ? "black" : "white",
                        }}
                      />
                    );
                  })}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {plates.map((plateValue) => (
              <MenuItem
                key={plateValue}
                value={plateValue}
                style={getStyles(plateValue, availablePlates, theme)}
              >
                {plateValue}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default AvailablePlates;
