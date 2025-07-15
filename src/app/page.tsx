import { columns } from "@/app/dashboard/columns";
import { DataTable } from "@/app/dashboard/data-table";
import { data } from "@/lib/data";


export default function Page() {
  return <div><DataTable columns={columns} data={data} /></div>;
}