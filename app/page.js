import Image from "next/image";
import fetchLR from "@/lib/fetchLR";
// import { useEffect } from "react";




export default async function Home() {

  const lrData = await fetchLR();
  console.log("lrData", lrData);




  return <h1>HomePage</h1>;
}
