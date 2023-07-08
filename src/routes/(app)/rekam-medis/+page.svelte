<script>
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css";
  
  export let data

  const handler = new DataHandler(data?.patients, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10 overflow-x-auto"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      href="/"
      home>Dashboard</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Rekam Medis</BreadcrumbItem
    >
  </Breadcrumb>
  <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Rekam Medis Pasien Rawat Inap RSI Aisyah
      </p>
    </div>
    <hr class="my-5" />
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="no_rekam_medis">No Rekam Medis</Th>
              <Th {handler} orderBy="name">Nama</Th>
              <Th {handler} orderBy="tgl_masuk">Tanggal Masuk</Th>
              <Th {handler} orderBy="tgl_pulang">Tanggal Keluar</Th>
              <Th {handler} orderBy="ruangan">Ruangan</Th>
              <Th {handler} orderBy="status_rawat">Status</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { no_rekam_medis, name, jenis_kelamin, tgl_masuk, tgl_pulang, nama_kamar, jenis_kamar, status_pulang }}
              <Pasien
                {no_rekam_medis}
                {name}
                {jenis_kelamin}
                {tgl_masuk}
                {tgl_pulang}
                {nama_kamar}
                {jenis_kamar}
                {status_pulang}
              />
            {/each}
          </tbody>
        </table>
      </Datatable>
    </section>
  </div>
</div>
