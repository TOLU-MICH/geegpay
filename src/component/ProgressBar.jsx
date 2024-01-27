import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ProgressBar = ({ colors, value }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? colors[0] : colors[1],
    },
  }));

  return (
    <div className="w-full py-4">
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
  );
};

export default ProgressBar;
