import { Button, TextField } from "@mui/material";
import { FC } from "react";

export const CompoundInterestCalculator: FC = () => {
  return (
    <div>
      <div className="flex flex-col">
        <TextField
          id="outlined-number"
          label="年率"
          type="number"
          variant="standard"
        />
        <TextField
          id="outlined-number"
          label="積立年数"
          type="number"
          variant="standard"
        />
        <TextField
          id="outlined-number"
          label="毎月積立額"
          type="number"
          variant="standard"
        />
        <TextField
          id="outlined-number"
          label="積立前の元金"
          type="number"
          variant="standard"
        />
        <div className="flex flex-row">
          <Button variant="contained">計算</Button>
          <Button variant="outlined">クリア</Button>
        </div>
        <div>結果</div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
