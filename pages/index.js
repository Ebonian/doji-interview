import LightCard from "../components/LightCard";
import DarkCard from "../components/DarkCard";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div className="grid text-center space-y-8 my-14">
        <h1 className="text-secondary-200 font-bold text-5xl">Pricing</h1>
        <h4 className="text-secondary-400 font-semibold text-xl">
          Premium Subscription
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-20">
        <LightCard
          Period="1 Month"
          Price="฿159"
          SafePrice=""
          Feature1="All Indicators Unlocked"
          Feature2="Custom Radar"
          Feature3="Unlimited alert for indicator radar on all time frames"
        ></LightCard>
        <DarkCard
          Period="3 Months"
          Price="฿417"
          SafePrice="Safe ฿60"
          Feature1="All Indicators Unlocked"
          Feature2="Custom Radar"
          Feature3="Unlimited alert for indicator radar on all time frames"
        ></DarkCard>
        <LightCard
          Period="12 Months"
          Price="฿1,188"
          SafePrice="Safe ฿720"
          Feature1="All Indicators Unlocked"
          Feature2="Custom Radar"
          Feature3="Unlimited alert for indicator radar on all time frames"
        ></LightCard>
      </div>
    </div>
  );
}
