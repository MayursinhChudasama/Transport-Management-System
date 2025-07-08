import prisma from "@/lib/prisma";

console.log("starts");

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const lr_no = searchParams.get("lr_no");
    if (lr_no) {
      const lr = await prisma.lR.findUnique({ where: { lr_no: parseInt(lr_no) } });
      if (!lr) return new Response("Not Found", { status: 404 });
      return Response.json(lr, { status: 200 });
    }
    // list all
    const lrs = await prisma.lR.findMany({
      orderBy: { created_at: "desc" },
    });
    console.log("lrs", lrs);
    return Response.json(lrs, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { lr_no } = await req.json();
    if (!lr_no) return new Response("lr_no required", { status: 400 });
    await prisma.lR.delete({ where: { lr_no: parseInt(lr_no) } });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body-->>", body);

    // ------------------- validation -------------------
    const requiredFields = Object.keys(body);
    const errors = [];

    requiredFields.forEach((f) => {
      if (!body[f] || `${body[f]}`.
        trim() === "") {
        errors.push(`${f} is required`);
      }
    });





    if (errors.length) {
      return Response.json({ errors }, { status: 400 });
    }

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

    return Response.json(lrEntry, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
