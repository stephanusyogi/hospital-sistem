<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";

  let dummyCatatan = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "keterangan": "Pengisian Formulir Pemeriksaan IGD/Poliklinik",
      "identitas": "Stephanus Yogi",
      "role": "Perawat",
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "keterangan": "Pengisian Formulir 12.16 Catatan Perkembangan",
      "identitas": "dr. Khal Drogo, Sp PD FINASIM",
      "role": "Dokter",
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "keterangan": "Pengisian Formulir 12.37 Pemberian Obat Pasien",
      "identitas": "Stephanus Yogi",
      "role": "Perawat",
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "keterangan": "Pengisian Formulir 12.37 Pemberian Obat Pasien",
      "identitas": "Stephanus Yogi",
      "role": "Perawat",
    },
  ];

  const no_rm = $page.params.slug;
  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: `/rekam-medis/${no_rm}?page=1`},
    { name: 2, href: `/rekam-medis/${no_rm}?page=2`},
    { name: 3, href: `/rekam-medis/${no_rm}?page=3`},
    { name: 4, href: `/rekam-medis/${no_rm}?page=4`},
    { name: 5, href: `/rekam-medis/${no_rm}?page=5`},
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
      goto(`/rekam-medis/${no_rm}?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/rekam-medis/${no_rm}?page=1`)
    }else {
      goto(`/rekam-medis/${no_rm}?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/rekam-medis/${no_rm}?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/rekam-medis/${no_rm}?page=2`)
    }else {
      goto(`/rekam-medis/${no_rm}?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
  
</script>
<div>
  <div class="flex flex-wrap items-centere justify-between">
    <div>
      <p class="font-medium text-xl">Log Riwayat Aktivitas Sistem Rekam Medis Rawat Inap</p>
    </div>
  </div>
</div>
<div class="flex justify-between items-center mt-4">
  <div class="flex items-center gap-4 mb-5">
    <div>
      <Button size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h6v2H3Zm0-5v-2h12v2H3Zm0-5V6h18v2H3Z"/></svg>
        Sort</Button>
      <Dropdown>
        <DropdownItem class="flex items-center gap-2">
          Tanggal & Jam
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2m-8 10v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
        </DropdownItem>
        <DropdownItem class="flex items-center gap-2">
          Tanggal & Jam
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2m-8-8v2l-3.33 4H11v2H5v-2l3.33-4H5v-2M9 3H7c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H7V5h2Z"/></svg>
        </DropdownItem>
      </Dropdown>
    </div>
  </div>
  <div class="w-50">
    <Search size="md"/>
  </div>
</div>
<hr class="my-5">
<Table hoverable={true} shadow>
  <TableHead>
    <TableHeadCell class="text-center">Tanggal & Jam</TableHeadCell>
    <TableHeadCell class="text-center">Keterangan</TableHeadCell>
    <TableHeadCell class="text-center">Identitas Aktor</TableHeadCell>
    <TableHeadCell class="text-center">Role</TableHeadCell>
  </TableHead>
  <TableBody> 
    {#each dummyCatatan as { tgl_jam, keterangan, identitas, role }}
      <Catatan tgl_jam={tgl_jam} keterangan={keterangan} identitas={identitas} role={role}/>
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
