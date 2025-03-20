import { FC } from "react";

export const CompoundInterestCalculator: FC = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>年率</div>
        <div>積立年数</div>
        <div>毎月積立額</div>
        <div>積立前の元金</div>
        <div className="flex flex-row">
          <div>計算</div>
          <div>クリア</div>
        </div>
        <div>結果</div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
