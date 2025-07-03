"use client";
import { useState } from "react";
import Input from "./Input";

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
  });

  function handleChange(key, e) {
    let value = e.target.value;
    setLRdata((prev) => ({
      ...prev,
      [key]: value,
    }));
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
    <form className='bg-[#1f1f1f] p-4 m-1'>
      <div className='text-center'>
        <button
          onClick={handleSave}
          className='text-2xl hover:text-[#e87f05] hover:cursor-pointer '
          type='button'>
          SAVE
        </button>
      </div>
      <div className='flex gap-5'>
        <Input
          label='LR No'
          id='LRno'
          width='w-100'
          onChange={(e) => handleChange("LRno", e)}
        />
        <Input
          label='LR Type'
          id='lr_type'
          onChange={(e) => handleChange("lr_type", e)}
        />
      </div>
      <div>
        <div className='flex gap-5'>
          <Input
            label='Consignor Name'
            id='consignor_name'
            onChange={(e) => handleChange("consignor_name", e)}
          />
          <Input
            label='Consignor GST'
            id='consignor_gst'
            onChange={(e) => handleChange("consignor_gst", e)}
          />
          <Input
            label='Consignor Mobile No'
            id='consignor_mob_no'
            onChange={(e) => handleChange("consignor_mob_no", e)}
          />
        </div>
        <Input
          label='Consignor Address'
          id='consignor_address'
          onChange={(e) => handleChange("consignor_address", e)}
          width=' w-157'
        />
      </div>
      <div>
        <div className='flex gap-5 '>
          <Input
            label='Consignee Name'
            id='consignee_name'
            onChange={(e) => handleChange("consignee_name", e)}
          />
          <Input
            label='Consignee GST'
            id='consignee_gst'
            onChange={(e) => handleChange("consignee_gst", e)}
          />
          <Input
            label='Consignee Mobile No'
            id='consignee_mob_no'
            onChange={(e) => handleChange("consignee_mob_no", e)}
          />
        </div>
        <Input
          label='Consignee Address'
          id='consginee_address'
          width=' w-157'
          onChange={(e) => handleChange("consignee_address", e)}
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='No of Articles'
          id='no_of_articles'
          onChange={(e) => handleChange("no_of_articles", e)}
        />
        <Input
          label='Article Type'
          id='article_type'
          onChange={(e) => handleChange("article_type", e)}
        />
        <Input
          label='Nature of Goods'
          id='nature_of_goods'
          onChange={(e) => handleChange("nature_of_goods", e)}
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='Gross Weight'
          id='gross_weight'
          onChange={(e) => handleChange("gross_weight", e)}
        />
        <Input
          label='Net Weight'
          id='net_weight'
          onChange={(e) => handleChange("net_weight", e)}
        />
        <Input
          label='Rate'
          id='rate'
          onChange={(e) => handleChange("rate", e)}
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='Hamali'
          id='hamali'
          onChange={(e) => handleChange("hamali", e)}
        />
        <Input
          label='Door Delivery'
          id='door_delivery'
          onChange={(e) => handleChange("door_delivery", e)}
        />
        <Input
          label='Pickup Charge'
          id='pickup_charge'
          onChange={(e) => handleChange("pickup_charge", e)}
        />
        <Input
          label='Other Charge'
          id='other_charge'
          onChange={(e) => handleChange("other_charge", e)}
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='LR Invoice No'
          id='lr_invoice_no'
          onChange={(e) => handleChange("lr_invoice_no", e)}
        />
        <Input
          label='LR E-Way'
          id='lr_eway'
          onChange={(e) => handleChange("lr_eway", e)}
        />
        <Input
          label='LR Invoice Value'
          id='lr_invoice_value'
          onChange={(e) => handleChange("lr_invoice_value", e)}
        />
      </div>
    </form>
  );
}
