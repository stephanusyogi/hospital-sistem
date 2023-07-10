<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Label, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea } from "flowbite-svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"
  import Pasien from "./Pasien.svelte";

  export let data
  const handler = new DataHandler(data?.pasien_saya, { rowsPerPage: 10 })
  const rows = handler.getRows()
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Pasien Saya</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-lg sm:text-md lg:text-2xl font-semibold">Pasien Saya</p>
      </div>
      <hr class="my-5">
      <section class="table-section">
        <Datatable {handler}>
          <table>
            <thead>
              <tr>
                <Th {handler} orderBy="aksi">Rekam Medis</Th>
                <Th {handler} orderBy="no_rekam_medis">No. RM</Th>
                <Th {handler} orderBy="nama_pasien">Nama</Th>
                <Th {handler} orderBy="ruangan">Ruangan</Th>
                <Th {handler} orderBy="asuransi">Asuransi</Th>
                <Th {handler} orderBy="tgl_mulai">Tanggal Mulai</Th>
                <Th {handler} orderBy="tgl_selesai">Tanggal Selesai</Th>
              </tr>
            </thead>
            <tbody>
              {#each $rows as {no_rekam_medis, nama_pasien, ruangan, asuransi, tgl_mulai, tgl_selesai}, i}
                <Pasien no_rekam_medis={no_rekam_medis} nama_pasien={nama_pasien} ruangan={ruangan} asuransi={asuransi} tgl_mulai={tgl_mulai} tgl_selesai={tgl_selesai}/>
              {/each}   
            </tbody>
          </table>
        </Datatable>
      </section>
    </div>
  </section>
</div>