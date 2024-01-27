import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Selection = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="!rounded-full !text-[12px] !font-normal "
        sx={{
          "& .MuiSelect-select": { paddingY: "6px", paddingX: "12px" },
        }}
      >
        <MenuItem value="">
          <em>Weekly</em>
        </MenuItem>
        <MenuItem value={10}>Monthly</MenuItem>
        <MenuItem value={20}>Yearly</MenuItem>
      </Select>
    </div>
  );
};

export default Selection;
