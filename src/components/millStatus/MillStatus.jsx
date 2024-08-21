import { useState } from "react";

const MillStatus = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [dinner, setDinner] = useState(true);

  const break_fast = () => {
    setBreakfast(!breakfast);
    console.log(breakfast);
  };

  return (
    <div>
      <div className="container mx-auto border-2 min-h-full">
        <div className="flex flex-col gap-20">
          <div className="flex gap-5">
            <h1>Breakfast</h1>
            <input
              onClick={break_fast}
              type="checkbox"
              className="toggle toggle-error"
            />
            {breakfast ? (
              <p>your Mill is on</p>
            ) : (
              <p>
                your Mill is <span className="text-red-400 font-bold">OFF</span>
              </p>
            )}
          </div>
          <div className="flex gap-5">
            <h1>Lunch</h1>
            <input
              type="checkbox"
              className="toggle toggle-error"
              defaultChecked
            />
            <p>your Mill is on</p>
            <p>
              your Mill is <span className="text-red-400 font-bold">OFF</span>
            </p>
          </div>
          <div className="flex gap-5">
            <h1>Dinner</h1>
            <input
              type="checkbox"
              className="toggle toggle-error"
              defaultChecked
            />
            <p>your Mill is on</p>
            <p>
              your Mill is <span className="text-red-400 font-bold">OFF</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillStatus;
