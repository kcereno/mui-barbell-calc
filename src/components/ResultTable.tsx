import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup } from "@mui/material";
import { LoadoutType } from "../App";

function createData(
  plateValue: number,
  editButtons: any,
  perSide: number,

  weightTotal: number
) {
  return { plateValue, editButtons, perSide, weightTotal };
}

const buttons = [<Button key="add">+</Button>, <Button key="delete">-</Button>];

const testButtons = (
  <>
    <ButtonGroup size="small">{buttons}</ButtonGroup>
  </>
);

type PropTypes = {
  loadout: LoadoutType;
  barWeight: number;
};

const ResultTable = (props: PropTypes) => {
  const rows = props.loadout.map((entry) => {
    const totalAmount = 2 * entry.amountPerSide;
    const totalWeight = totalAmount * entry.plate;

    return createData(
      entry.plate,
      testButtons,
      entry.amountPerSide,
      totalWeight
    );
  });

  const getTotalWeight = () => {
    let total: number = 0;

    props.loadout.forEach((entry) => {
      total += entry.plate * entry.amountPerSide * 2;
    });

    return total;
  };

  let plateTotal = getTotalWeight();

  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: "33%" }}>
              Plate Value
            </TableCell>
            {/* <TableCell align="center">Edit</TableCell> */}
            <TableCell align="center" sx={{ width: "33%" }}>
              Amount Per Side
            </TableCell>
            <TableCell align="center" sx={{ width: "33%" }}>
              Total Weight
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.plateValue}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.plateValue}
              </TableCell>
              {/* <TableCell align="center">{row.editButtons}</TableCell> */}
              <TableCell align="center">{row.perSide}</TableCell>
              <TableCell align="center">{row.weightTotal}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell align="center">
              <strong>Subtotals</strong>
            </TableCell>
            <TableCell align="center">
              <strong>
                {plateTotal}(plates) + {props.barWeight}(bar)
              </strong>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">
              <strong>Total</strong>
            </TableCell>
            <TableCell align="center">
              <strong>{props.barWeight + plateTotal} lbs</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
