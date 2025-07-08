'use server';
export default async function getLr(lr_no) {
  try {
    const res = await fetch(`http://localhost:3000/api/lr?lr_no=${lr_no}`);
    if (!res.ok) throw new Error('Failed');
    return await res.json();
  } catch (e) {
    console.error('getLr error', e);
    return null;
  }
}
