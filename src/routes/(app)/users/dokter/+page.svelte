<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Dokter from "./Dokter.svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Icon from "@iconify/svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css"

  let dummyDoktor = [
    {
      "nama_dokter": "Khal Drogo",
      "spesialis": "Umum",
    },
    {
      "nama_dokter": "Viserys Targaryen",
      "spesialis": "Spesialis Penyakit Dalam",
    },
    {
      "nama_dokter": "Khal Drogo",
      "spesialis": "Spesialis Saraf",
    },
    {
      "nama_dokter": "Ramsay Bolton",
      "spesialis": "Spesialis Bedah",
    },
  ];
  const handler = new DataHandler(dummyDoktor, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto"  aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Dokter</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Master Data Dokter RSI Aisyah</p>
      <Button size="sm" color="blue" on:click={() => goto("/users/dokter/tambah")}><Icon icon="material-symbols:add-circle" width="25" height="25" class="sm:mr-2"/><span class="hidden sm:block">Tambah Dokter</span></Button>
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="nama_dokter">Nama</Th>
              <Th {handler} orderBy="spesialis">Spesialis</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as {nama_dokter, spesialis}}
            <Dokter nama_dokter={nama_dokter} spesialis={spesialis}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>