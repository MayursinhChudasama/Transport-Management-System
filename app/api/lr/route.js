import prisma from "@/lib/prisma";

console.log("starts");

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body-->>", body);

    const lrEntry = await prisma.lR.create({
      data: {
        lr_type: body.lr_type,
        consignor_name: body.consignor_name,
        consignor_gst: body.consignor_gst,
        consignor_address: body.consignor_address,
        consignor_mob_no: body.consignor_mob_no,
        consignee_name: body.consignee_name,
        consignee_gst: body.consignee_gst,
        consignee_address: body.consignee_address,
        consignee_mob_no: body.consignee_mob_no,
        no_of_articles: parseInt(body.no_of_articles),
        article_type: body.article_type,
        nature_of_goods: body.nature_of_goods,
        gross_weight: parseInt(body.gross_weight),
        net_weight: parseInt(body.net_weight),
        rate: parseInt(body.rate),
        hamali: parseInt(body.hamali),
        door_delivery: parseInt(body.door_delivery),
        pickup_charge: parseInt(body.pickup_charge),
        other_charge: parseInt(body.other_charge),
        lr_invoice_no: body.lr_invoice_no,
        lr_eway: body.lr_eway,
        lr_invoice_value: parseInt(body.lr_invoice_value),
      },
    });

    return Response.json(lrEntry);
  } catch (error) {
    console.error("❌ API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
