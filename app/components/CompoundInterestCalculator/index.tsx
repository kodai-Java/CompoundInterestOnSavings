import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";

export const CompoundInterestCalculator: FC = () => {
  const [resultMoney, setResultMoney] = useState<number>();
  /**
   * 複利計算
   */
  const calculateCompoundInterest = () => {
    // 年率、年数、積立前の元金を複利計算する
    setResultMoney(0);
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
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
          label="積立前の元金"
          type="number"
          variant="standard"
        />
        <div className="flex flex-row">
          <Button variant="contained" onClick={calculateCompoundInterest}>
            計算
          </Button>
        </div>
        <div className="flex flex-row gap-1">
          <div>結果</div>
          <div>{resultMoney}円</div>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
