import type { MetaFunction } from "@remix-run/node";
import { CompoundInterestCalculator } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Todo" },
    { name: "description", content: "Welcome to remix!" },
  ];
};

export default function Index() {
  return <CompoundInterestCalculator />;
}
