<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css"
  
  let dummyUsers = [
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
  ];
  const handler = new DataHandler(dummyUsers, { rowsPerPage: 50 })
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
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Data Pasien RSI Aisyah</p>
    </div>
    <hr class="my-5">
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="no">No.</Th>
              <Th {handler} orderBy="nomor">No. RM</Th>
              <Th {handler} orderBy="nama_pasien">Nama</Th>
              <Th {handler} orderBy="nik">NIK</Th>
              <Th {handler} orderBy="jenis_kelamin">Jenis Kelamin</Th>
              <Th {handler} orderBy="ttl">Tempat & Tanggal Lahir</Th>
              <Th {handler} orderBy="alamat">Alamat</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as {no_rm, nama_pasien, nik, jenis_kelamin, ttl, alamat}, i}
              <Pasien tableRowNumber={i+1} no_rm={no_rm} nama_pasien={nama_pasien} nik={nik} jenis_kelamin={jenis_kelamin} ttl={ttl} alamat={alamat}/>
            {/each}   
          </tbody>
        </table>
      </Datatable>
    </section>
  </section>
</div>