<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Modal, Radio, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";

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

  let filterModal = false;
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pendaftaran</BreadcrumbItem>
    <BreadcrumbItem>Loket Pasien</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-xl font-semibold">Admisi Rawat Inap</p>
      </div>
      <hr class="my-5">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4 mb-5">
          <div>
            <Button size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h6v2H3Zm0-5v-2h12v2H3Zm0-5V6h18v2H3Z"/></svg>
              Sort</Button>
            <Dropdown>
              <DropdownItem class="flex items-center gap-2">
                Nama A ke Z
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
              </DropdownItem>
              <DropdownItem class="flex items-center gap-2">
                Nama Z ke A
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2m-8-8v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
              </DropdownItem>
            </Dropdown>
          </div>
          <div>
            <Button size="sm" on:click={() => filterModal = true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13v7h-4v-7L2.95 4h18.1L14 13Z"/></svg>
              Filter</Button>
            <Modal title="Filter" on:click={() => filterModal = true} bind:open={filterModal} autoclose>
              <p class="mb-4 font-semibold text-gray-900 dark:text-white">Jenis Kelamin</p>
              <ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
                <li class="w-full"><Radio name="hor-list" class="p-3">Laki-Laki</Radio></li>
                <li class="w-full"><Radio name="hor-list" class="p-3">Perempuan</Radio></li>
              </ul>
              <svelte:fragment slot='footer'>
                <Button color="red">Remove Filter</Button>
                <Button color="green">Apply Filter</Button>
              </svelte:fragment>
            </Modal>
          </div>
        </div>
        <div class="w-50">
          <Search size="md"/>
        </div>
      </div>
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">No.</TableHeadCell>
          <TableHeadCell class="text-center">No. RM</TableHeadCell>
          <TableHeadCell class="text-center">Nama</TableHeadCell>
          <TableHeadCell class="text-center">NIK</TableHeadCell>
          <TableHeadCell class="text-center">Aksi</TableHeadCell>
        </TableHead>
        <TableBody> 
          {#each dummyUsers as {no_rm, nama_pasien, nik, jenis_kelamin}, i}
            <Pasien tableRowNumber={i+1} no_rm={no_rm} nama_pasien={nama_pasien} nik={nik} jenis_kelamin={jenis_kelamin}/>
          {/each}   
        </TableBody>
      </Table>
    </div>
  </section>
</div>