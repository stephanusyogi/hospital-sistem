<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css"
  
  export let data
  const handler = new DataHandler(data?.patients, { rowsPerPage: 10 })
  const rows = handler.getRows()
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Pasien</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Master Data Pasien RSI Aisyah</p>
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="no">No.</Th>
              <Th {handler} orderBy="no_rekam_medis">No. RM</Th>
              <Th {handler} orderBy="name">Nama</Th>
              <Th {handler} orderBy="nik">NIK</Th>
              <Th {handler} orderBy="jenis_kelamin">Jenis Kelamin</Th>
              <Th {handler} orderBy="ttl">Tempat & Tanggal Lahir</Th>
              <Th {handler} orderBy="alamat_ktp">Alamat</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as {no_rekam_medis, name, nik, jenis_kelamin, tempat_lahir, tanggal_lahir, alamat_ktp}, i}
              <Pasien tableRowNumber={i+1} no_rekam_medis={no_rekam_medis} name={name} nik={nik} jenis_kelamin={jenis_kelamin} tempat_lahir={tempat_lahir} tanggal_lahir={tanggal_lahir} alamat_ktp={alamat_ktp}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>