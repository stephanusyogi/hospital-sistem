<script>
  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "-",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Tyrion Lanister",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "-",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
    {
      "no_rm": "000523-2023",
      "nama_pasien": "Sansa Stark",
      "pronounce": "Nn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 0,
    },
    {
      "no_rm": "000526-2023",
      "nama_pasien": "Lyanna Mormont",
      "pronounce": "Nn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 0,
    },
  ];
  
  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: '/rekam-medis?page=1'},
    { name: 2, href: '/rekam-medis?page=2'},
    { name: 3, href: '/rekam-medis?page=3'},
    { name: 4, href: '/rekam-medis?page=4'},
    { name: 5, href: '/rekam-medis?page=5'}
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
      goto(`/rekam-medis?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/rekam-medis?page=1`)
    }else {
      goto(`/rekam-medis?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/rekam-medis?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/rekam-medis?page=2`)
    }else {
      goto(`/rekam-medis?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Rekam Medis</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Rekam Medis Pasien Rawat Inap RSI Aisyah</p>
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
              Tgl Masuk
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
            </DropdownItem>
            <DropdownItem class="flex items-center gap-2">
              Tgl Masuk
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2m-8-8v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
            </DropdownItem>
            <DropdownItem class="flex items-center gap-2">
              Tgl Keluar
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
            </DropdownItem>
            <DropdownItem class="flex items-center gap-2">
              Tgl Keluar
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
        <TableHeadCell class="text-center">Nomor Rekam Medis</TableHeadCell>
        <TableHeadCell class="text-center">Nama</TableHeadCell>
        <TableHeadCell class="text-center">Tanggal Masuk</TableHeadCell>
        <TableHeadCell class="text-center">Tanggal Keluar</TableHeadCell>
        <TableHeadCell class="text-center">Ruangan</TableHeadCell>
        <TableHeadCell class="text-center">Status</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyUsers as {no_rm, nama_pasien, pronounce, tgl_masuk, tgl_pulang, ruangan, jenis_ruangan, status_rawat}}
          <Pasien no_rm={no_rm} nama_pasien={nama_pasien} pronounce={pronounce} tgl_masuk={tgl_masuk} tgl_pulang={tgl_pulang} ruangan={ruangan} jenis_ruangan={jenis_ruangan} status_rawat={status_rawat}/>
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