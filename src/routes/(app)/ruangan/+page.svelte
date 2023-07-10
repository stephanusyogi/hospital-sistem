<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Ruangan from "./Ruangan.svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"

  export let data 

  const handler = new DataHandler(data?.ruangan, { rowsPerPage: 10 })
  const rows = handler.getRows()
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Data Ruangan</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Data Ruangan RSI Aisyah</p>
      <Button size="sm" color="blue" on:click={() => goto("/ruangan/tambah")}><Icon icon="material-symbols:add-circle" width="25" height="25" class="sm:mr-2"/><span class="hidden sm:block">Tambah Ruangan</span></Button>
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="nama">Nama Ruangan</Th>
              <Th {handler} orderBy="jenis">Kelas Ruangan</Th>
              <Th {handler} orderBy="harga">Harga</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { _id, nama_ruangan, kelas, harga }}
              <Ruangan _id={_id} nama_ruangan={nama_ruangan} kelas={kelas} harga={harga} data={data}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>