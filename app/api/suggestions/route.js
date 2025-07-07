import prisma from "@/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const field = searchParams.get("field");

  if (!field) {
    return Response.json({ error: "field query param required" }, { status: 400 });
  }

  // Whitelisted fields (prevents SQL injection & unknown column errors)
  const allowed = [
    "lr_type",
    "consignor_name",
    "consignor_gst",
    "consignor_address",
    "consignor_mob_no",
    "consignee_name",
    "consignee_gst",
    "consignee_address",
    "consignee_mob_no",
    "article_type",
    "nature_of_goods",
    "rate",
    "lr_invoice_no",
    "lr_eway",
  ];

  if (!allowed.includes(field)) {
    return Response.json({ error: "unsupported field" }, { status: 400 });
  }

  try {
    // Fetch distinct values for the requested field
    const rows = await prisma.lR.findMany({
      distinct: [field],
      select: { [field]: true },
      orderBy: { [field]: "asc" },
    });
    const values = rows.map((row) => row[field]).filter(Boolean);
    return Response.json(values, { status: 200 });
  } catch (err) {
    console.error("Suggestion API error", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
