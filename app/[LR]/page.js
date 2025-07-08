import LRPage from "@/components/LR/LRPage";
import getLr from "@/lib/getLr";

export default async function LR({ params }) {
  const lr_no = await params?.LR;
  const data = await getLr(lr_no);
  return (
    <div>
      <LRPage data={data || {}} />
    </div>
  );
}