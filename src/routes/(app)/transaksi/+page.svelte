<script>

  import { Breadcrumb, BreadcrumbItem, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Transaksi from "./Transaksi.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"

  let dummyTransaksi = [
    {
      "tgl_transaksi": "2023-02-25",
      "nomor": "TRS000001",
      "pasien": "Jon Snow",
      "asuransi": "UMUM/Mandiri",
      "total": "3.000.000",
      "status_bayar": 1,
    },
    {
      "tgl_transaksi": "-",
      "nomor": "TRS000002",
      "pasien": "Arya Stark",
      "asuransi": "BPJS",
      "total": "500.000",
      "status_bayar": 0,
    },
    {
      "tgl_transaksi": "2023-02-25",
      "nomor": "TRS000003",
      "pasien": "Cersei Lannister",
      "asuransi": "UMUM/Mandiri",
      "total": "1.500.000",
      "status_bayar": 1,
    },
  ];
  const handler = new DataHandler(dummyTransaksi, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>
  
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Daftar Transaksi</BreadcrumbItem>
  </Breadcrumb>
  <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Daftar Transaksi Rawat Inap RSI Aisyah</p>
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="tgl_transaksi">Tanggal Transaksi</Th>
              <Th {handler} orderBy="nomor">Nomor Nota</Th>
              <Th {handler} orderBy="pasien">Nama Pasien</Th>
              <Th {handler} orderBy="asuransi">Asuransi</Th>
              <Th {handler} orderBy="status_bayar">Total</Th>
              <Th {handler} orderBy="total">Status</Th>
              <Th {handler} orderBy="nota">Nota</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { tgl_transaksi, nomor, pasien, asuransi, status_bayar, total }}
              <Transaksi tgl_transaksi={tgl_transaksi} nomor={nomor} pasien={pasien} asuransi={asuransi} status_bayar={status_bayar} total={total}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </div>
</div>