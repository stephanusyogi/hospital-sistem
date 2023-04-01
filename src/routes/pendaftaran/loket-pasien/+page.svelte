<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Modal, Pagination, Radio, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
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

  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: '/pendaftaran/loket-pasien?page=1'},
    { name: 2, href: '/pendaftaran/loket-pasien?page=2'},
    { name: 3, href: '/pendaftaran/loket-pasien?page=3'},
    { name: 4, href: '/pendaftaran/loket-pasien?page=4'},
    { name: 5, href: '/pendaftaran/loket-pasien?page=5'}
  ];
  
  $:{ 
      pages.forEach((page)=>{
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if ( hrefValue === activeUrlPagination){
        page.active=true
      }else{
        page.active=false
      }
    })
      pages=pages
  }

  let helperPagination = {start: 1, end: 10, total: 100}


  const previous = () => {
    if (activeUrlPagination === "1") {
      goto(`/pendaftaran/loket-pasien?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/pendaftaran/loket-pasien?page=1`)
    }else {
      goto(`/pendaftaran/loket-pasien?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/pendaftaran/loket-pasien?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/pendaftaran/loket-pasien?page=2`)
    }else {
      goto(`/pendaftaran/loket-pasien?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
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
        <p class="text-xl font-semibold">Loket Pendaftaran Pasien</p>
        <Button size="sm" href="/pendaftaran/pasien-baru">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h8Zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1Zm-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"/></g></svg>
          Tambah Pasien Baru
        </Button>
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
              <DropdownItem class="flex items-center gap-2">
                Tgl Registrasi
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
              </DropdownItem>
              <DropdownItem class="flex items-center gap-2">
                Tgl Registrasi
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2m-8-8v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
              </DropdownItem>
            </Dropdown>
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
          <TableHeadCell class="text-center">Jenis Kelamin</TableHeadCell>
          <TableHeadCell class="text-center">Tempat & Tanggal Lahir</TableHeadCell>
          <TableHeadCell class="text-center">Alamat</TableHeadCell>
          <TableHeadCell class="text-center">Aksi</TableHeadCell>
        </TableHead>
        <TableBody> 
          {#each dummyUsers as {no_rm, nama_pasien, nik, jenis_kelamin, ttl, alamat}, i}
            <Pasien tableRowNumber={i+1} no_rm={no_rm} nama_pasien={nama_pasien} nik={nik} jenis_kelamin={jenis_kelamin} ttl={ttl} alamat={alamat}/>
          {/each}   
        </TableBody>
      </Table>
      <div class="flex justify-between items-center mt-2">
        <div class="text-sm text-gray-700 dark:text-gray-400">
          Showing <span class="font-semibold text-gray-900 dark:text-white">{helperPagination.start}</span> to
          <span class="font-semibold text-gray-900 dark:text-white">{helperPagination.end}</span>
          of <span class="font-semibold text-gray-900 dark:text-white">{helperPagination.total}</span> Entries
        </div>
        <Pagination {pages} on:previous={previous} on:next={next} />
      </div>
    </div>
  </section>
</div>