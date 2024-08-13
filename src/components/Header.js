import React, { useState } from "react";

const Header = () => {
  let [show, setShow] = useState(false);
  return show ? (
    <>
      <div className="flex justify-between bg-primary">
        <div className="p-3 pl-6 m-4 text-white">idea-dump</div>
        <div className="p-3 pr-6 m-4 text-white">
          <div
            className="rotate-90 h-8 w-8 font-bold hover:cursor-pointer border-3 border-white"
            onClick={() => {
              setShow(!show);
            }}
          >
            . . .
          </div>
          </div>
        </div>
    </>
  ) : (
    <div className="flex justify-between bg-primary">
      <div className="p-3 pl-6 m-4 text-white">idea-dump</div>
      <div className="p-3 pr-6 m-4 text-white flex">
        <div
          className="rotate-90 h-8 w-8 font-bold hover:cursor-pointer border-white"
          onClick={() => {
            setShow(!show);
          }}
        >
          . . .
        </div>
      </div>
    </div>
  );
};

export default Header;
