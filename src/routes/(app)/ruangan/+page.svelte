<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Ruangan from "./Ruangan.svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  
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
  
  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: '/ruangan?page=1'},
    { name: 2, href: '/ruangan?page=2'},
    { name: 3, href: '/ruangan?page=3'},
    { name: 4, href: '/ruangan?page=4'},
    { name: 5, href: '/ruangan?page=5'}
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
      goto(`/ruangan?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/ruangan?page=1`)
    }else {
      goto(`/ruangan?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/ruangan?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/ruangan?page=2`)
    }else {
      goto(`/ruangan?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Data Ruangan</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Data Ruangan RSI Aisyah</p>
      <Button size="sm" color="blue" on:click={() => goto("/ruangan/tambah")}><Icon icon="material-symbols:add-circle" width="25" height="25" class="mr-2"/>Tambah Ruangan</Button>
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
              Harga
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2v14M9 13H7c-1.1 0-2 .9-2 2v1a2 2 0 0 0 2 2h2v1H5v2h4c1.11 0 2-.89 2-2v-4a2 2 0 0 0-2-2m0 3H7v-1h2v1M9 3H7c-1.1 0-2 .9-2 2v4a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 6H7V5h2v4Z"/></svg>
            </DropdownItem>
            <DropdownItem class="flex items-center gap-2">
              Harga
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M9 21H5v-2h4v-1H7a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2m0-6H7v1h2M7 3h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 6h2V5H7Z"/></svg>
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
        <TableHeadCell class="text-center">Nama Ruangan</TableHeadCell>
        <TableHeadCell class="text-center">Jenis Ruangan</TableHeadCell>
        <TableHeadCell class="text-center">Harga</TableHeadCell>
        <TableHeadCell class="text-center">Kuota</TableHeadCell>
        <TableHeadCell class="text-center">Tersedia</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyRuangan as { nama, jenis, harga, kuota, tersedia }}
          <Ruangan nama={nama} jenis={jenis} harga={harga} kuota={kuota} tersedia={tersedia}/>
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
  </section>
</div>