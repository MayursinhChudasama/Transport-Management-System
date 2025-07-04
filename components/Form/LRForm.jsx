"use client";
import { useState } from "react";
import Input from "./Input";
import MultiSelect from "./MultiSelect";

export default function LRForm() {
  const [LRdata, setLRdata] = useState({
    LRno: "",
    article_type: "",
    consignor_name: "",
    consignor_gst: "",
    consignor_address: "",
    consignor_mob_no: "",
    consignee_name: "",
    consignee_gst: "",
    consignee_address: "",
    consignee_mob_no: "",
    door_delivery: "",
    gross_weight: "",
    hamali: "",
    lr_eway: "",
    lr_invoice_no: "",
    lr_invoice_value: "",
    lr_type: "",
    nature_of_goods: "",
    net_weight: "",
    no_of_articles: "",
    other_charge: "",
    pickup_charge: "",
    rate: "",
    total: "",
  });

  function handleChange(key, e) {
    const value = e.target.value;
    setLRdata((prev) => {
      const updated = { ...prev, [key]: value };
      const chargeKeys = ["rate", "hamali", "door_delivery", "pickup_charge", "other_charge"];
      const total = chargeKeys.reduce((acc, k) => acc + (parseFloat(updated[k]) || 0), 0);
      updated.total = total;
      return updated;
    });
  }

  async function handleSave() {
    try {
      console.log(LRdata);

      const res = await fetch("/api/lr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LRdata),
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(`Failed to save: ${error}`);
      }

      const data = await res.json();
      console.log("✅ Saved successfully:", data);
    } catch (error) {
      console.error("❌ Error saving data->", error);
    }
  }

  return (
    <form className='w-full min-h-screen mx-auto my-0 bg-[#1b1b1b] p-8 flex flex-col gap-8'>
      <div className='text-center'>
        <button
          onClick={handleSave}
          className='px-4 py-1 rounded bg-[#e87f05] text-gray-900 font-semibold hover:bg-[#ffa040] transition-colors'
          type='button'>
          SAVE
        </button>
      </div>

      {/* Main information row */}
      <div className='flex flex-wrap lg:flex-nowrap gap-8 mt-8 flex-1'>
        {/* Column 1: LR, Consignor & Consignee */}
        <div className='flex flex-col gap-6 flex-1 min-w-[260px]'>
          {/* LR details */}
          <div className='flex gap-5'>
            <Input
              label='LR No'
              id='LRno'
              width='w-100'
              onChange={(e) => handleChange("LRno", e)}
            />
            <MultiSelect
              label='LR Type'
              id='lr_type'
              options={['Type A', 'Type B', 'Type C']}
              value={LRdata.lr_type}
              onChange={(val) => handleChange("lr_type", { target: { value: val } })}
            />
          </div>

          {/* Consignor section */}
          <div className='flex flex-col gap-4'>
            <div className='flex gap-5'>
              <Input label='Consignor Name' id='consignor_name' onChange={(e) => handleChange("consignor_name", e)} />
              <Input label='Consignor GST' id='consignor_gst' onChange={(e) => handleChange("consignor_gst", e)} />
            </div>
            <div className='flex gap-5'>
              <Input label='Consignor Mobile No' id='consignor_mob_no' onChange={(e) => handleChange("consignor_mob_no", e)} />
            </div>
            <Input label='Consignor Address' id='consignor_address' onChange={(e) => handleChange("consignor_address", e)} width=' w-157' />
          </div>

          {/* Consignee section */}
          <div className='flex flex-col gap-4'>
            <div className='flex gap-5'>
              <Input label='Consignee Name' id='consignee_name' onChange={(e) => handleChange("consignee_name", e)} />
              <Input label='Consignee GST' id='consignee_gst' onChange={(e) => handleChange("consignee_gst", e)} />
            </div>
            <div className='flex gap-5'>
              <Input label='Consignee Mobile No' id='consignee_mob_no' onChange={(e) => handleChange("consignee_mob_no", e)} />
            </div>
            <Input label='Consignee Address' id='consignee_address' onChange={(e) => handleChange("consignee_address", e)} width=' w-157' />
          </div>
        </div>  {/* end column 1 */}

        {/* Articles (9 inputs) */}
        {/* Articles block */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 flex-1'>
          <Input label='No of Articles' id='no_of_articles' onChange={(e) => handleChange("no_of_articles", e)} />
          <Input label='Article Type' id='article_type' onChange={(e) => handleChange("article_type", e)} />
          <Input label='Nature of Goods' id='nature_of_goods' onChange={(e) => handleChange("nature_of_goods", e)} />
          <Input label='Gross Weight' id='gross_weight' onChange={(e) => handleChange("gross_weight", e)} />
          <Input label='Net Weight' id='net_weight' onChange={(e) => handleChange("net_weight", e)} />
          <Input label='Rate' id='rate' onChange={(e) => handleChange("rate", e)} />
          <Input label='LR Invoice No' id='lr_invoice_no' onChange={(e) => handleChange("lr_invoice_no", e)} />
          <Input label='LR E-Way' id='lr_eway' onChange={(e) => handleChange("lr_eway", e)} />
          <Input label='LR Invoice Value' id='lr_invoice_value' onChange={(e) => handleChange("lr_invoice_value", e)} />
        </div>
        {/* Column 3: Charges */}
        <div className='flex flex-col gap-3 max-w-xs self-start border-l border-gray-700 pl-8'>
          <Input label='Hamali' id='hamali' onChange={(e) => handleChange("hamali", e)} />
          <Input label='Door Delivery' id='door_delivery' onChange={(e) => handleChange("door_delivery", e)} />
          <Input label='Pickup Charge' id='pickup_charge' onChange={(e) => handleChange("pickup_charge", e)} />
          <Input label='Other Charge' id='other_charge' onChange={(e) => handleChange("other_charge", e)} />
          <Input label='Total' id='total' onChange={(e) => handleChange("total", e)} />

        </div>
      </div>  {/* end main information row */}

    </form>
  );
}
