"use client";
import Input from "../Form/Input";

export default function LRPage({ data = {} }) {
  // Utility to safely get field value
  const v = (k) => data[k] || "";

  return (
    <div className='w-full mx-auto my-8 bg-[#1b1b1b] p-8 rounded-lg shadow-lg flex flex-col gap-8'>
      {/* Header section */}
      <div className='flex gap-5'>
        <Input label='LR No' id='LRno' value={v("LRno")} disabled />
        <Input label='LR Type' id='lr_type' value={v("lr_type")} disabled />
      </div>

      {/* Consignor + Consignee */}
      <div className='flex flex-wrap lg:flex-nowrap gap-8'>
        {/* Column 1 */}
        <div className='flex flex-col gap-6 flex-1 min-w-[260px]'>
          {/* Consignor */}
          <div className='flex gap-5'>
            <Input label='Consignor Name' id='consignor_name' value={v("consignor_name")} disabled />
            <Input label='Consignor GST' id='consignor_gst' value={v("consignor_gst")} disabled />
          </div>
          <Input label='Consignor Mobile No' id='consignor_mob_no' value={v("consignor_mob_no")} disabled />
          <Input label='Consignor Address' id='consignor_address' value={v("consignor_address")} disabled width=' w-157' />

          {/* Consignee */}
          <div className='mt-6 flex gap-5'>
            <Input label='Consignee Name' id='consignee_name' value={v("consignee_name")} disabled />
            <Input label='Consignee GST' id='consignee_gst' value={v("consignee_gst")} disabled />
          </div>
          <Input label='Consignee Mobile No' id='consignee_mob_no' value={v("consignee_mob_no")} disabled />
          <Input label='Consignee Address' id='consignee_address' value={v("consignee_address")} disabled width=' w-157' />
        </div>

        {/* Articles grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 flex-1'>
          <Input label='No of Articles' id='no_of_articles' value={v("no_of_articles")} disabled />
          <Input label='Article Type' id='article_type' value={v("article_type")} disabled />
          <Input label='Nature of Goods' id='nature_of_goods' value={v("nature_of_goods")} disabled />
          <Input label='Gross Weight' id='gross_weight' value={v("gross_weight")} disabled />
          <Input label='Net Weight' id='net_weight' value={v("net_weight")} disabled />
          <Input label='Rate' id='rate' value={v("rate")} disabled />
          <Input label='LR Invoice No' id='lr_invoice_no' value={v("lr_invoice_no")} disabled />
          <Input label='LR E-Way' id='lr_eway' value={v("lr_eway")} disabled />
          <Input label='LR Invoice Value' id='lr_invoice_value' value={v("lr_invoice_value")} disabled />
        </div>

        {/* Charges */}
        <div className='flex flex-col gap-3 max-w-xs self-start border-l border-gray-700 pl-8'>
          <Input label='Hamali' id='hamali' value={v("hamali")} disabled />
          <Input label='Door Delivery' id='door_delivery' value={v("door_delivery")} disabled />
          <Input label='Pickup Charge' id='pickup_charge' value={v("pickup_charge")} disabled />
          <Input label='Other Charge' id='other_charge' value={v("other_charge")} disabled />
          <Input label='Total' id='total' value={v("total")} disabled />
        </div>
      </div>
    </div>
  );
}
