'use server'
export default async function SaveLr(prevState, formData) {
  const LRdata = Object.fromEntries(formData.entries());
  const lrType = formData.get('lr_type');
  LRdata.lr_type = lrType;


  try {
    const res = await fetch("http://localhost:3000/api/lr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LRdata),
    });

    if (!res.ok) {
      const errRes = await res.json().catch(() => ({ message: 'Unknown error' }));
      console.log(errRes);

      return { ok: false, errors: errRes.errors || [errRes.message] };
    }

    const data = await res.json();
    console.log("Saved successfully:", data);
    return { ok: true };
  } catch (error) {

    console.error("Error saving data->", error);
    return { ok: false, errors: [error.message] };
  }
}