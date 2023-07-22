<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Icon from "@iconify/svelte";
  import Petugas from "./Petugas.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css"

  export let data
  
  const handler = new DataHandler(data?.apoteker, { rowsPerPage: 10 })
  const rows = handler.getRows()
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto"  aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Apoteker</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Master Data Apoteker RSI Aisyah</p>
      <Button size="sm" color="blue" on:click={() => goto("/users/apoteker/tambah")}><Icon icon="material-symbols:add-circle" width="25" height="25" class="sm:mr-2"/><span class="hidden sm:block">Tambah Apoteker</span></Button>
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="name">Nama</Th>
              <Th {handler} orderBy="role">Role</Th>
              <Th {handler} orderBy="email">Email</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as {_id, name, role, email}}
            <Petugas _id={_id} name={name} role={role} email={email} data={data}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>