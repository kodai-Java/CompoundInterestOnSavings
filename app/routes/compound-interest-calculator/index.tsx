import type { MetaFunction } from "@remix-run/node";
import { CompoundInterestCalculator } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "積立複利計算" },
    { name: "description", content: "Welcome to remix!" },
  ];
};

export default function Index() {
  return <CompoundInterestCalculator />;
}
