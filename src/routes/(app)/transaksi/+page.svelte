<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Transaksi from "./Transaksi.svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let dummyTransaksi = [
    {
      "tgl_transaksi": "2023-02-25",
      "nomor": "TRS000001",
      "pasien": "Jon Snow",
      "asuransi": "UMUM/Mandiri",
      "total": "3.000.000",
      "status_bayar": 1,
    },
    {
      "tgl_transaksi": "-",
      "nomor": "TRS000002",
      "pasien": "Arya Stark",
      "asuransi": "BPJS",
      "total": "500.000",
      "status_bayar": 0,
    },
    {
      "tgl_transaksi": "2023-02-25",
      "nomor": "TRS000003",
      "pasien": "Cersei Lannister",
      "asuransi": "UMUM/Mandiri",
      "total": "1.500.000",
      "status_bayar": 1,
    },
  ];
  
  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: '/transaksi?page=1'},
    { name: 2, href: '/transaksi?page=2'},
    { name: 3, href: '/transaksi?page=3'},
    { name: 4, href: '/transaksi?page=4'},
    { name: 5, href: '/transaksi?page=5'}
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
      goto(`/transaksi?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/transaksi?page=1`)
    }else {
      goto(`/transaksi?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/transaksi?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/transaksi?page=2`)
    }else {
      goto(`/transaksi?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
</script>
  
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Daftar Transaksi</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Daftar Transaksi Rawat Inap RSI Aisyah</p>
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
              Tgl Transaksi
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
            </DropdownItem>
            <DropdownItem class="flex items-center gap-2">
              Tgl Transaksi
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
        <TableHeadCell class="text-center">Tanggal Transaksi</TableHeadCell>
        <TableHeadCell class="text-center">Nomor Nota</TableHeadCell>
        <TableHeadCell class="text-center">Nama Pasien</TableHeadCell>
        <TableHeadCell class="text-center">Asuransi</TableHeadCell>
        <TableHeadCell class="text-center">Total</TableHeadCell>
        <TableHeadCell class="text-center">Status</TableHeadCell>
        <TableHeadCell class="text-center">Nota</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyTransaksi as {tgl_transaksi, nomor, pasien, asuransi, status_bayar, total }}
          <Transaksi tgl_transaksi={tgl_transaksi} nomor={nomor} pasien={pasien} asuransi={asuransi} status_bayar={status_bayar} total={total}/>
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