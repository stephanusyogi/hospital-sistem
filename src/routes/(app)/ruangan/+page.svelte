<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Ruangan from "./Ruangan.svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"
  
  let dummyRuangan = [
    {
      "nama": "Ayodya",
      "jenis": "Kelas VVIP",
      "harga": "2.500.000",
      "kuota": "4",
      "tersedia": "3"
    },
    {
      "nama": "Wisnu",
      "jenis": "Kelas VVIP",
      "harga": "2.250.000",
      "kuota": "7",
      "tersedia": "full"
    },
    {
      "nama": "Amarta",
      "jenis": "Kelas VIP",
      "harga": "2.000.000",
      "kuota": "8",
      "tersedia": "2"
    },
    {
      "nama": "Rama",
      "jenis": "Kelas VIP",
      "harga": "2.000.000",
      "kuota": "8",
      "tersedia": "full"
    },
    {
      "nama": "Krisna",
      "jenis": "Kelas 1",
      "harga": "1.750.000",
      "kuota": "15",
      "tersedia": "2"
    },
  ];
  const handler = new DataHandler(dummyRuangan, { rowsPerPage: 50 })
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
              <Th {handler} orderBy="jenis">Jenis Ruangan</Th>
              <Th {handler} orderBy="harga">Harga</Th>
              <Th {handler} orderBy="kuota">Kuota</Th>
              <Th {handler} orderBy="tersedia">Tersedia</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { nama, jenis, harga, kuota, tersedia }}
              <Ruangan nama={nama} jenis={jenis} harga={harga} kuota={kuota} tersedia={tersedia}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>