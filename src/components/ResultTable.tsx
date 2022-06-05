import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup } from "@mui/material";

function createData(
  plateValue: number,
  editButtons: any,
  perSide: number,
  totalAmount: number,
  weightTotal: number
) {
  return { plateValue, editButtons, perSide, totalAmount, weightTotal };
}

const buttons = [<Button key="add">+</Button>, <Button key="delete">-</Button>];

const testButtons = (
  <>
    <ButtonGroup size="small">{buttons}</ButtonGroup>
  </>
);

const rows = [
  createData(55, testButtons, 6.0, 24, 4.0),
  createData(45, testButtons, 6.0, 24, 4.0),
  createData(35, testButtons, 6.0, 24, 4.0),
  createData(25, testButtons, 6.0, 24, 4.0),
  createData(15, testButtons, 6.0, 24, 4.0),
];

const ResultTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Plate Value</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Per Side</TableCell>
            <TableCell align="center">Total Amount</TableCell>
            <TableCell align="center">Total Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.plateValue}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.plateValue}
              </TableCell>
              <TableCell align="right">{row.editButtons}</TableCell>
              <TableCell align="right">{row.perSide}</TableCell>
              <TableCell align="right">{row.totalAmount}</TableCell>
              <TableCell align="right">{row.weightTotal}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={4} />
            <TableCell colSpan={2}>Overall Total</TableCell>
            <TableCell align="right">225lbs</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
