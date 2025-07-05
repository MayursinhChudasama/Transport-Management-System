'use server'
export default async function SaveLr(prevState, formData){
    const LRdata = Object.fromEntries(formData.entries());
    console.log(LRdata);
    try {        
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
            console.log("Saved successfully:", data);
          } catch (error) {
            console.error("Error saving data->", error);
          }
}