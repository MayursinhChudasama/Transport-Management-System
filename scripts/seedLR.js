// scripts/seedLR.js
// Stand-alone seeding script for development only.
// Run with:  node scripts/seedLR.js

const BASE_URL = "http://localhost:3000/api/lr";

const lrTypes = ["PAID", "TO PAY", "FOC", "PP" ];
const articleTypes = ["Boxes", "Bags", "Pallets", "Crates", "Drums"];
const goodsNature = ["Electronics", "Textiles", "Machinery", "Chemicals", "Furniture", "Food" ];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randArray(arr) {
  return arr[randInt(0, arr.length - 1)];
}

function randString(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[randInt(0, chars.length - 1)];
  return out;
}

function makeFakeLR() {
  return {
    lr_type: randArray(lrTypes),
    consignor_name: `Consignor ${randString(4)}`,
    consignor_gst: `GST${randString(12)}`,
    consignor_address: `${randInt(1, 999)}, Main Street, City ${randString(3)}`,
    consignor_mob_no: `9${randInt(100000000, 999999999)}`,

    consignee_name: `Consignee ${randString(4)}`,
    consignee_gst: `GST${randString(12)}`,
    consignee_address: `${randInt(1, 999)}, Industrial Area, City ${randString(3)}`,
    consignee_mob_no: `8${randInt(100000000, 999999999)}`,

    no_of_articles: randInt(1, 100),
    article_type: randArray(articleTypes),
    nature_of_goods: randArray(goodsNature),
    gross_weight: randInt(50, 1000),
    net_weight: randInt(40, 900),
    rate: randInt(50, 500),

    hamali: randInt(10, 200),
    door_delivery: randInt(0, 150),
    pickup_charge: randInt(0, 150),
    other_charge: randInt(0, 150),

    lr_invoice_no: `INV${randInt(100000, 999999)}`,
    lr_eway: randString(12),
    lr_invoice_value: randInt(1000, 50000),
  };
}

(async () => {
  console.log("🌱  Seeding 25 LR entries …\n");
  for (let i = 1; i <= 25; i++) {
    const payload = makeFakeLR();

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const { lr_no } = await res.json();
      console.log(`✅  [${i}/25]  Created LR #${lr_no}`);
    } else {
      const msg = await res.text();
      console.error(`❌  [${i}/25]  Failed → ${msg}`);
    }
  }
  console.log("\n🎉  Done.");
})();
