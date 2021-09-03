import Button from "./Button";

export default function DarkCard({
  Period,
  Price,
  SafePrice,
  Feature1,
  Feature2,
  Feature3,
}) {
  return (
    <div className="flex bg-secondary-300 shadow-neudarkdrop rounded-3xl w-420 h-656">
      <div className="relative shadow-neudarkinner m-3 p-10 rounded-2xl flex-grow">
        <div className="absolute right-popular top-11 text-left rounded-l-full w-160 h-70 bg-primary text-center p-5">
          <h1 className="font-semibold text-xl text-white">Popular</h1>
        </div>
        <h4 className="font-semibold text-xl text-white mt-6 mb-8 uppercase">
          {Period}
        </h4>
        <h1 className="space-x-3 mb-10">
          <span className="font-bold text-5xl text-white font-prompt">
            {Price}
          </span>{" "}
          <span className="font-medium text-lg text-primary">{SafePrice}</span>
        </h1>
        <p className="font-medium text-xl text-white mb-10">{Feature1}</p>
        <p className="font-medium text-xl text-white mb-10">{Feature2}</p>
        <p className="font-medium text-xl text-white mb-10">{Feature3}</p>
        <div className="flex place-content-center mt-28">
          <Button title="Choose Plan" darkshadow coloredbg />
        </div>
      </div>
    </div>
  );
}
