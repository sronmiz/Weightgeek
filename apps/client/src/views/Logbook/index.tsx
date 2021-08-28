import React from "react";
import { Page } from "@/components/layout";
import { FormInput } from "@/components/common";
import Datepicker from "react-datepicker";
import {
  RiScales2Line as WeightIcon,
  RiFireLine as CaloriesIcon,
} from "react-icons/ri";

export const Logbook = () => {
  return (
    <Page header="Logbook">
      <div className="card">
        <div className="font-playfair text-xl mb-[20px]">Add Log</div>
        <div className="flex gap-[15px] flex-col md:(flex-row)">
          <FormInput
            icon={<WeightIcon size="20px" />}
            type="number"
            placeholder="Weight"
          />
          <FormInput
            icon={<CaloriesIcon size="20px" />}
            type="number"
            placeholder="Calories"
          />
        </div>
        <div className="custom-datepicker">
        <Datepicker
          inline
          onChange={() => {
            console.log("lala");
          }}
        />
        </div>
      </div>
    </Page>
  );
};