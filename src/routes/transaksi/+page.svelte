<script>

  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Transaksi from "./Transaksi.svelte";

  let dummyTransaksi = [
    {
      "tgl_transaksi": "2023-02-25",
      "nomor": "TRS000001",
      "pasien": "Jon Snow",
      "asuransi": "UMUM/Mandiri",
      "total": "3.000.000",
      "status_bayar": 0,
    },
    {
      "tgl_transaksi": "2023-02-28",
      "nomor": "TRS000002",
      "pasien": "Arya Stark",
      "asuransi": "BPJS",
      "total": "500.000",
      "status_bayar": 1,
    },
    {
      "tgl_transaksi": "2023-03-15",
      "nomor": "TRS000003",
      "pasien": "Cersei Lannister",
      "asuransi": "UMUM/Mandiri",
      "total": "1.500.000",
      "status_bayar": 1,
    },
  ];
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Daftar Transaksi</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Daftar Transaksi Rawat Inap RSI Aisyah</p>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Tanggal Transaksi</TableHeadCell>
        <TableHeadCell class="text-center">Nomor Nota</TableHeadCell>
        <TableHeadCell class="text-center">Nama Pasien</TableHeadCell>
        <TableHeadCell class="text-center">Asuransi</TableHeadCell>
        <TableHeadCell class="text-center">Status</TableHeadCell>
        <TableHeadCell class="text-center">Total</TableHeadCell>
        <TableHeadCell class="text-center">Nota</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyTransaksi as {tgl_transaksi, nomor, pasien, asuransi, status, total }}
          <Transaksi tgl_transaksi={tgl_transaksi} nomor={nomor} pasien={pasien} asuransi={asuransi} status={status} total={total}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>