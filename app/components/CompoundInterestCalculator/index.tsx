import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CompoundInterestForm = {
  annualRate: number;
  years: number;
  principal: number;
};
export const CompoundInterestCalculator: FC = () => {
  /**
   * 複利計算
   */
  const calculateCompoundInterest = (data: CompoundInterestForm) => {
    // 年率、年数、積立前の元金を複利計算する
    setResultMoney(data.principal);
  };
  const { register, handleSubmit } = useForm<CompoundInterestForm>();
  const onSubmit: SubmitHandler<CompoundInterestForm> =
    calculateCompoundInterest;
  const [resultMoney, setResultMoney] = useState<number>();
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-4 w-40 text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-number"
          label="年率(%)"
          type="number"
          variant="standard"
          {...register("annualRate")}
        />
        <TextField
          id="outlined-number"
          label="積立年数(年)"
          type="number"
          variant="standard"
          {...register("years")}
        />
        <TextField
          id="outlined-number"
          label="積立前の元金(円)"
          type="number"
          variant="standard"
          {...register("principal")}
        />
        <Button variant="contained" type="submit">
          計算
        </Button>
        <div className="flex flex-row gap-1 justify-center">
          <div>結果</div>
          <div>{resultMoney}円</div>
        </div>
      </form>
    </div>
  );
};

export default CompoundInterestCalculator;
