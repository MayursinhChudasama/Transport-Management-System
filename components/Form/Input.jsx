export default function Input({ label, id, width, type, ...props }) {
  //   let width = " w-50";
  //   if (isAddress) {
  //     width = " w-175";
  //   }
  return (
    <div className='relative py-1'>
      <input
        type={type || "text"}
        id={id}
        name={id}
        placeholder=' '
        {...props}
        className={
          "peer border-b-2 border-gray-300 focus:outline-none focus:border-[#e87f05] bg-transparent mt-8 pb-2 " +
          width
        }
      />
      <label
        htmlFor={id}
        className='absolute left-1 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#e87f05] hover:cursor-text'>
        {label}
      </label>
    </div>
  );
}
