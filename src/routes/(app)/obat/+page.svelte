<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Obat from "./Obat.svelte";
  import Icon from "@iconify/svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"
  
  /** @type {import('./$types').PageData} */
  export let data;
  const user_data = data?.user_data
  
  const handler = new DataHandler(data?.obat, { rowsPerPage: 10 })
  const rows = handler.getRows()
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Data Obat</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Data Obat RSI Aisyiyah</p>
      {#if user_data.role === "Apoteker"}
        <Button size="sm" color="blue" on:click={() => goto("/obat/tambah")}><Icon icon="icon-park-solid:medicine-bottle" width="25" height="25" class="sm:mr-2"/><span class="hidden sm:block">Tambah Obat</span></Button>
      {/if}
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="nama_obat">Nama Obat</Th>
              <Th {handler} orderBy="harga">Harga</Th>
              {#if user_data.role === "Apoteker"}
              <Th {handler} orderBy="aksi">Aksi</Th>
              {/if}
            </tr>
          </thead>
          <tbody>
            {#each $rows as { _id, nama_obat, harga }}
              <Obat _id={_id} nama_obat={nama_obat} harga={harga} data={data}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>