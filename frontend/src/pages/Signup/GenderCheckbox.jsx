import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="form-control w-full my-2 px-2 ">
      <label className="cursor-pointer flex gap-10">
        <span className="label-text text-lg text-black">Gender</span>
        <div className="radio radio-primary flex gap-2">
          <input
            type="radio"
            name="gender"
            className="radio"
            value="male"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <span className="label-text text-black text-lg">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio"
            value="female"
            checked={selectedGender === "female"}
            onChange={()=>onCheckboxChange("female")}
          />
          <span className="label-text text-black text-lg">Female</span>
        </div>
      </label>
    </div>
  );
};

export default GenderCheckbox;
