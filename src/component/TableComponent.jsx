import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import person from "../assets/person.svg";
import invoice from "../assets/invoice.svg";

const TableComponent = () => {
  function createData(name, date, amount, img, status) {
    return { name, date, amount, status, img };
  }

  const rows = [
    createData("Marcus Benson", "Nov 15, 2023", "80,000", person, true),
    createData("Jaydon Vaccaro", "Nov 15, 2023", "150,000", person, false),
    createData("Corey Schleifer", "Nov 14, 2023", "87,000", person, true),
    createData("Cooper Press", "Nov 14, 2023", "100,000", person, false),
    createData("Phillip Lubin", "Nov 13, 2023", "78,000", person, true),
  ];

  const header = ["Name", "Date", "Amount", "Status", "Invoice"];
  return (
    <TableContainer
      component={Paper}
      className="w-full p-[20px_10px] xl:p-[20px_18px] sm:max-w-[50%] max-w-[97%] sm:min-w-[463px] h-fit"
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} className="!py-0 !border-0">
              <p className="text-[16px] font-semibold text-[#26282C] text-left">
                Last Orders
              </p>
            </TableCell>
            <TableCell align="right" className="!py-0 !border-0" colSpan={2}>
              <p className="text-[16px] font-semibold text-[#34CAA5] text-right ">
                See all
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            {header.map((item, index) => {
              return (
                <TableCell
                  align={index != 0 ? "right" : ""}
                  className="!py-[14px]"
                >
                  <p className="text-sm font-medium text-[#9CA4AB] text-left">
                    {item}
                  </p>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="!px-[10px]">
                <span className="flex items-center gap-[10px] w-max sm:w-auto">
                  <img
                    src={row.img}
                    alt=""
                    className="w-8 h-8 rounded-[33.3333px] bg-cover bg-no-repeat bg-center bg-[#D9D9D9]"
                  />
                  <p className="text-base font-medium ">{row.name}</p>
                </span>
              </TableCell>
              <TableCell align="right" className="!px-[10px] ">
                <p className="text-[#737373] font-normal justify-end text-left w-max sm:w-auto">
                  {row.date}
                </p>
              </TableCell>
              <TableCell align="right" className="!px-[10px]">
                <p className="text-base text-[#0D062D] font-medium text-left">
                  $ {row.amount}
                </p>
              </TableCell>
              <TableCell align="right" className="!px-[10px]">
                <p
                  className={
                    "font-normal text-base text-left " +
                    (row.status ? "text-[#34CAA5]" : "text-[#ED544E]")
                  }
                >
                  {row.status ? "Paid" : "Refund"}
                </p>
              </TableCell>
              <TableCell align="right" className="!px-[10px]">
                <p className="flex items-center justify-start gap-[10px] text-sm font-normal text-[#0D062D] text-left">
                  <img src={invoice} alt="" className="w-4 h-4" />
                  View
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
