<script>

  import { Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Obat from "./Obat.svelte";
  import Icon from "@iconify/svelte";
  
  /** @type {import('./$types').PageData} */
  export let data;
  const user_data = data?.user_data

  let dummyObat = [
    {
      "nama": "Artesunate tablet",
      "kode": "OBT000001",
      "harga": "44.550",
    },
    {
      "nama": "Amodiaquine anhydrida tablet",
      "kode": "OBT000002",
      "harga": "44.550",
    },
    {
      "nama": "Albendazol",
      "kode": "OBT000003",
      "harga": "5.198",
    },
    {
      "nama": "Alopurinol tablet 100 mg",
      "kode": "OBT000004",
      "harga": "17.820",
    },
    {
      "nama": "Ambroxol Sirup",
      "kode": "OBT000005",
      "harga": "4.455",
    },
  ];
  
  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: '/obat?page=1'},
    { name: 2, href: '/obat?page=2'},
    { name: 3, href: '/obat?page=3'},
    { name: 4, href: '/obat?page=4'},
    { name: 5, href: '/obat?page=5'}
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
      goto(`/obat?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/obat?page=1`)
    }else {
      goto(`/obat?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/obat?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/obat?page=2`)
    }else {
      goto(`/obat?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Data Obat & Bahan Habis Pakai</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Data Obat & Bahan Habis Pakai RSI Aisyah</p>
      {#if user_data.role === "Farmasi"}
        <Button size="md" color="blue" on:click={() => goto("/obat/tambah")}><Icon icon="icon-park-solid:medicine-bottle" width="25" height="25" class="mr-2"/>Tambah Obat</Button>
      {/if}
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
              Kode Barang
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
            </DropdownItem>
            <DropdownItem class="flex items-center gap-2">
              Kode Barang
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2m-8-8v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
            </DropdownItem>
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
        <TableHeadCell class="text-center">Kode Barang</TableHeadCell>
        <TableHeadCell class="text-center">Nama Barang</TableHeadCell>
        <TableHeadCell class="text-center">Harga</TableHeadCell>
        {#if user_data.role === "Farmasi"}
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
        {/if}
      </TableHead>
      <TableBody>    
        {#each dummyObat as {kode, nama, harga }}
          <Obat kode={kode} nama={nama} harga={harga} user_data={user_data}/>
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