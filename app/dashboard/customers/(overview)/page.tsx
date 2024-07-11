import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page() {
  const customers = await [];
  const customer = await CustomersTable({ customers });

  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customer
      </h1>
      {/* <CustomersTable customers={customer}/> */}
    </div>
  );
}
