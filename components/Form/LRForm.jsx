import Input from "./Input";

export default function LRForm() {
  return (
    <form className='bg-[#1f1f1f] p-4 m-1'>
      <div className='text-center'>
        <button
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
        />
        <Input
          label='LR Type'
          id='lr_type'
        />
      </div>
      <div>
        <div className='flex gap-5'>
          <Input
            label='Consignor Name'
            id='consignor_name'
          />
          <Input
            label='Consignor GST'
            id='consignor_gst'
          />
          <Input
            label='Consignor Mobile No'
            id='consginor_mob_no'
          />
        </div>
        <Input
          label='Consignor Address'
          id='connsignor_address'
          width=' w-157'
        />
      </div>
      <div>
        <div className='flex gap-5 '>
          <Input
            label='Consignee Name'
            id='consignee_name'
          />
          <Input
            label='Consignee GST'
            id='consignee_gst'
          />
          <Input
            label='Consignee Mobile No'
            id='consignee_mob_no'
          />
        </div>
        <Input
          label='Consignee Address'
          id='consginee_address'
          width=' w-157'
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='No of Articles'
          id='no_of_articles'
        />
        <Input
          label='Article Type'
          id='article_type'
        />
        <Input
          label='Nature of Goods'
          id='nature_of_goods'
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='Gross Weight'
          id='gross_weight'
        />
        <Input
          label='Net Weight'
          id='net_weight'
        />
        <Input
          label='Rate'
          id='rate'
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='Hamali'
          id='hamali'
        />
        <Input
          label='Door Delivery'
          id='door_delivery'
        />
        <Input
          label='Pickup Charge'
          id='pickup_charge'
        />
        <Input
          label='Other Charge'
          id='other_charge'
        />
      </div>
      <div className='flex gap-5 '>
        <Input
          label='LR Invoice No'
          id='lr_invoice_no'
        />
        <Input
          label='LR E-Way'
          id='lr_eway'
        />
        <Input
          label='LR Invoice Value'
          id='lr_invoice_value'
        />
      </div>
    </form>
  );
}
