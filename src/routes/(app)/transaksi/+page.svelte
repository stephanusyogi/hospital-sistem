<script>

  import { Breadcrumb, BreadcrumbItem, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Transaksi from "./Transaksi.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"

  export let data
  const handler = new DataHandler(data?.transaksi, { rowsPerPage: 10 })
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
              <Th {handler} orderBy="nama_pasien">Nama Pasien</Th>
              <Th {handler} orderBy="no_rekam_medis">No. RM</Th>
              <Th {handler} orderBy="tgl_masuk">Tanggal Masuk</Th>
              <Th {handler} orderBy="nama_asuransi">Asuransi</Th>
              <Th {handler} orderBy="nota">Nota</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { _id, nama_pasien, no_rekam_medis, tgl_masuk, nama_asuransi }}
              <Transaksi _id={_id} nama_pasien={nama_pasien} no_rekam_medis={no_rekam_medis} tgl_masuk={tgl_masuk} nama_asuransi={nama_asuransi}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </div>
</div>