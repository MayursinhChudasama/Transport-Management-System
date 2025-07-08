'use server'
export default async function deleteLr(lr_no) {
  try {
    const res = await fetch('http://localhost:3000/api/lr', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lr_no }),
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || 'Failed to delete LR');
    }
    return true;
  } catch (err) {
    console.error('Delete LR error ->', err);
    throw err;
  }
}
