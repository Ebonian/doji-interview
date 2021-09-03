import Button from "./Button";

export default function LightCard({
  Period,
  Price,
  SafePrice,
  Feature1,
  Feature2,
  Feature3,
}) {
  return (
    <div className="mt-12 flex bg-secondary-100 shadow-neulightdrop rounded-3xl w-420 h-608">
      <div className="shadow-neulightinner m-3 p-10 rounded-2xl flex-grow">
        <h4 className="font-semibold text-xl text-secondary-200 uppercase mb-8">
          {Period}
        </h4>
        <h1 className="space-x-3 mb-10">
          <span className="font-bold text-4xl text-secondary-200 font-prompt">
            {Price}
          </span>{" "}
          <span className="font-medium text-lg text-primary">{SafePrice}</span>
        </h1>
        <p className="font-medium text-xl text-secondary-200 mb-10">
          {Feature1}
        </p>
        <p className="font-medium text-xl text-secondary-200 mb-10">
          {Feature2}
        </p>
        <p className="font-medium text-xl text-secondary-200 mb-10">
          {Feature3}
        </p>
        <div className="flex place-content-center mt-24">
          <Button title="Choose Plan" lightshadow whitebg />
        </div>
      </div>
    </div>
  );
}
