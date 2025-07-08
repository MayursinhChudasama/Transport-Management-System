export default async function fetchLR() {
  try {
    const res = await fetch("http://localhost:3000/api/lr");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data->", error);
    return [];
  }
}
