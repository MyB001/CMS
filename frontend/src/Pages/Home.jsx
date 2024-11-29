import React from "react";
import Feature from "../Components/Features/Feature";
import Chart from "../Components/Charts/Chart";
import datas from "../Components/Charts/datas";
import Members from "../Components/Members/Members";
import Transactions from "../Components/Transactions/Transactions";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-8">
        <Feature title="خرید" price="300,000,000" profit="+12"/>
        <Feature title="فروش" price="220,000,000" profit="-8.2"/>
        <Feature title="درآمد خالص" price="40,000,000" profit="-3.4"/>
      </div>
      <Chart data={datas}/>
      <div className="grid grid-cols-3 gap-8">
        <Members />
        <Transactions/>
      </div>
    </div>
  );
}
