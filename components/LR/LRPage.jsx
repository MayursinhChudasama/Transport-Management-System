"use client";
import React, { useState } from "react";
import Input from "../Form/Input";
import { useRouter } from "next/navigation";

export default function LRPage({ data = {} }) {
  const router = useRouter();
  // Utility to safely get field value
  const v = (k) => data[k] || "";

  // Local UI state
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    console.log('clicked');

    if (isEditing) {
      // TODO: implement save logic
      setIsEditing((prev)=>!prev);
    } else {
      setIsEditing((prev)=>!prev);
    }
  };

  const handleDiscard = () => {
    if (isEditing) {

      setIsEditing((prev)=>!prev);
    } else {
      router.push('/all-lr')
    }
  };

  return (

    <div className='w-full bg-[#1b1b1b] p-8 rounded-lg shadow-lg flex flex-col gap-8'>
      {/* Action buttons */}
      <div className='flex justify-end gap-4'>
        <button
          onClick={handleEditClick}
          className='px-4 py-2 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer rounded'
          type='button'
        >
          {isEditing ? "Save Changes" : "Edit"}
        </button>
        <button
          onClick={handleDiscard}
          className='px-4 py-2 bg-gray-600 hover:bg-gray-700 hover:cursor-pointer rounded'
          type='button'
        >
         {isEditing ? "Discard Changes" : "Cancell"}
        </button>
      </div>
    <div className='w-full bg-[#1b1b1b]  rounded-lg shadow-lg flex flex-col gap-8'>
      {/* Header section */}
      <div className='flex gap-5'>

        <Input label='LR Type' id='lr_type' value={v("lr_type")} disabled={!isEditing} />
      </div>

      {/* Consignor + Consignee */}
      <div className='flex flex-wrap lg:flex-nowrap gap-8'>
        {/* Column 1 */}
        <div className='flex flex-col gap-6 flex-1 min-w-[260px]'>
          {/* Consignor */}
          <div className='flex gap-5'>
            <Input label='Consignor Name' id='consignor_name' value={v("consignor_name")} disabled={!isEditing} />
            <Input label='Consignor GST' id='consignor_gst' value={v("consignor_gst")} disabled={!isEditing} />
          </div>
          <Input label='Consignor Mobile No' id='consignor_mob_no' value={v("consignor_mob_no")} disabled={!isEditing} />
          <Input label='Consignor Address' id='consignor_address' value={v("consignor_address")} disabled={!isEditing} width=' w-157' />

          {/* Consignee */}
          <div className='mt-6 flex gap-5'>
            <Input label='Consignee Name' id='consignee_name' value={v("consignee_name")} disabled={!isEditing} />
            <Input label='Consignee GST' id='consignee_gst' value={v("consignee_gst")} disabled={!isEditing} />
          </div>
          <Input label='Consignee Mobile No' id='consignee_mob_no' value={v("consignee_mob_no")} disabled={!isEditing} />
          <Input label='Consignee Address' id='consignee_address' value={v("consignee_address")} disabled={!isEditing} width=' w-157' />
        </div>

        {/* Articles grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 flex-1'>
          <Input label='No of Articles' id='no_of_articles' value={v("no_of_articles")} disabled={!isEditing} />
          <Input label='Article Type' id='article_type' value={v("article_type")} disabled={!isEditing} />
          <Input label='Nature of Goods' id='nature_of_goods' value={v("nature_of_goods")} disabled={!isEditing} />
          <Input label='Gross Weight' id='gross_weight' value={v("gross_weight")} disabled={!isEditing} />
          <Input label='Net Weight' id='net_weight' value={v("net_weight")} disabled={!isEditing} />
          <Input label='Rate' id='rate' value={v("rate")} disabled={!isEditing} />
          <Input label='LR Invoice No' id='lr_invoice_no' value={v("lr_invoice_no")} disabled={!isEditing} />
          <Input label='LR E-Way' id='lr_eway' value={v("lr_eway")} disabled={!isEditing} />
          <Input label='LR Invoice Value' id='lr_invoice_value' value={v("lr_invoice_value")} disabled={!isEditing} />
        </div>

        {/* Charges */}
        <div className='flex flex-col gap-3 max-w-xs self-start border-l border-gray-700 pl-8'>
          <Input label='Hamali' id='hamali' value={v("hamali")} disabled={!isEditing} />
          <Input label='Door Delivery' id='door_delivery' value={v("door_delivery")} disabled={!isEditing} />
          <Input label='Pickup Charge' id='pickup_charge' value={v("pickup_charge")} disabled={!isEditing} />
          <Input label='Other Charge' id='other_charge' value={v("other_charge")} disabled={!isEditing} />
          <Input label='Total' id='total' value={v("total")} disabled={!isEditing} />
        </div>
      </div>
      </div>
      </div>

    );
}
