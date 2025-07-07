"use client";
import { useActionState } from "react";
import Input from "./Input";
import MultiSelect from "./MultiSelect";
// import {    } from "react-dom";
import SaveLr from "@/lib/saveLr";

export default function LRForm() {

const [state, formAction] = useActionState(SaveLr, null);
  // build a set of required-error fields
  const errorFields = new Set(
    state?.errors?.filter(e=>e.endsWith('is required')).map(e=> e.split(' ')[0]) || []
  );

  return (
    <form className='w-full mx-auto my-8 bg-[#1b1b1b] p-8 rounded-lg shadow-lg flex flex-col gap-8' action={formAction}>
      {state?.errors && (
        <div className="bg-red-800 text-red-200 p-3 rounded">
          <p>Enter all fields!</p>
        </div>
      )}
      {state?.ok && (
        <div className="bg-green-700 text-green-100 p-3 rounded">Saved successfully!</div>
      )}
      <div className='text-center'>
        <button
          // onClick={handleSave}
          className='px-4 py-1 rounded bg-[#e87f05] text-gray-900 font-semibold hover:bg-[#ffa040] transition-colors'
          >
          SAVE
        </button>
      </div>

      {/* Main information row */}
      <div className='flex flex-wrap lg:flex-nowrap gap-8 mt-8 flex-1'>
        {/* Column 1: LR, Consignor & Consignee */}
        <div className='flex flex-col gap-6 flex-1 min-w-[260px]'>
          {/* LR details */}
          <div className='flex gap-5'>
            {/* <Input
              label='LR No'
              id='LRno'
              width='w-100'             
            /> */}
            <MultiSelect
              label='LR Type'
              id='lr_type'
              options={['TOPAY', 'PAID']}    
              error={errorFields.has('lr_type')}          
            />
          </div>

          {/* Consignor section */}
          <div className='flex flex-col gap-4'>
            <div className='flex gap-5'>
              <Input label='Consignor Name' id='consignor_name' error={errorFields.has('consignor_name')} />
              <Input label='Consignor GST' id='consignor_gst' error={errorFields.has('consignor_gst')} />
            </div>
            <div className='flex gap-5'>
              <Input label='Consignor Mobile No' id='consignor_mob_no' error={errorFields.has('consignor_mob_no')} />
            </div>
            <Input label='Consignor Address' id='consignor_address' width=' w-157' error={errorFields.has('consignor_address')}/>
          </div>

          {/* Consignee section */}
          <div className='flex flex-col gap-4'>
            <div className='flex gap-5'>
              <Input label='Consignee Name' id='consignee_name' error={errorFields.has('consignee_name')}/>
              <Input label='Consignee GST' id='consignee_gst' error={errorFields.has('consignee_gst')}/>
            </div>
            <div className='flex gap-5'>
              <Input label='Consignee Mobile No' id='consignee_mob_no' error={errorFields.has('consignee_mob_no')}/>
            </div>
            <Input label='Consignee Address' id='consignee_address' width=' w-157' error={errorFields.has('consignee_address')}/>
          </div>
        </div>  {/* end column 1 */}

        {/* Articles (9 inputs) */}
        {/* Articles block */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 flex-1'>
          <Input label='No of Articles' id='no_of_articles' error={errorFields.has('no_of_articles')} />
          <Input label='Article Type' id='article_type' error={errorFields.has('article_type')} />
          <Input label='Nature of Goods' id='nature_of_goods' error={errorFields.has('nature_of_goods')} />
          <Input label='Gross Weight' id='gross_weight' error={errorFields.has('gross_weight')} />
          <Input label='Net Weight' id='net_weight' error={errorFields.has('net_weight')} />
          <Input label='Rate' id='rate' error={errorFields.has('rate')} />
          <Input label='LR Invoice No' id='lr_invoice_no' error={errorFields.has('lr_invoice_no')} />
          <Input label='LR E-Way' id='lr_eway' error={errorFields.has('lr_eway')} />
          <Input label='LR Invoice Value' id='lr_invoice_value' error={errorFields.has('lr_invoice_value')} />
        </div>
        {/* Column 3: Charges */}
        <div className='flex flex-col gap-3 max-w-xs self-start border-l border-gray-700 pl-8'>
          <Input label='Hamali' id='hamali' error={errorFields.has('hamali')} />
          <Input label='Door Delivery' id='door_delivery' error={errorFields.has('door_delivery')} />
          <Input label='Pickup Charge' id='pickup_charge' error={errorFields.has('pickup_charge')} />
          <Input label='Other Charge' id='other_charge' error={errorFields.has('other_charge')} />
          <Input label='Hamali' id='hamali' error={errorFields.has('hamali')} />
          <Input label='Door Delivery' id='door_delivery' error={errorFields.has('door_delivery')} />
          <Input label='Pickup Charge' id='pickup_charge' error={errorFields.has('pickup_charge')} />
          <Input label='Other Charge' id='other_charge' error={errorFields.has('other_charge')} />
         

        </div>
      </div> 

    </form>
  );
}
