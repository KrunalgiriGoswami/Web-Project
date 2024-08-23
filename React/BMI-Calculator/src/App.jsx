import { useMemo, useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }
  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return Math.round(weight / (calculateHeight * calculateHeight));
  }, [weight, height]);

  return (
    <>
      <main className="container w-full bg-slate-200 m-auto p-10 text-center font-bold">
        <div className="">
          <div>
            <h1 className="text-5xl bg-blue-600 p-5">BMI Calculator</h1>
          </div>
          <div className="bg-blue-300 py-5">
            <div>
              <div>
                <p className="py-1">Weight : {weight}kg</p>
                <input
                  type="range"
                  min={40}
                  max={200}
                  step={1}
                  onChange={onWeightChange}
                  className=""
                />
              </div>
              <div>
                <p className="py-1">Height : {height}cm</p>
                <input
                  type="range"
                  min={140}
                  max={220}
                  step={1}
                  onChange={onHeightChange}
                />
              </div>
            </div>
            <div className="py-3">
              <p>Your BMI is</p>
              <div className="py-2">
                <p className="bg-blue-800 inline-block p-2 text-white rounded-lg w-20">
                  {output}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
