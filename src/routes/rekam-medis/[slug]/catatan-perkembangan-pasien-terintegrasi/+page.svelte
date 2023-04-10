<script>

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell} from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";

  let dummyCatatan = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "ppa": "Perawat",
      "hasil": "<p>S: Nyeri akut lutut kiri sejak 1-2 jam</p><p>O: Skala nyeri VAS: 7 TD 165/90, N 115/m, Frek Nafas: 30/m</p><p>A: Nyeri akut athritis gout</p><p>P: Mengatasi nyeri dalam 2 jam dengan target VAS < 4</p>",
      "instruksi": "<ul><li>Monitoring nyeri tiap 30'</li><li>Lapor DPJP</li><li>Kolaborasi pemberian anti inlamasi & analgesic</li></ul>",
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM",
    },
    {
      "tgl_jam": "2023-03-19 10:30:00",
      "ppa": "Dokter",
      "hasil": "<p>S: Nyeri lutut kiri akut sejak pagi</p><p>O: Lutut kiri agak merah, nyeri tekan, skala NTS 7-8, hangat pada palpasi</p><p>A: Gouty Arthritis - flare Genu Sinistra</p><p>P: Inj steroid xx mg, tab colchicine 2x0,6 mg/hari</p>",
      "instruksi": "<ul><li>Lapor 2 jam lagi skala nyeri</li><li>Foto ro lutut hari ini bila nyeri mereda/toleransi cukup</li>",
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM",
    },
  ];

  const no_rm = $page.params.slug;
  $: activeUrlPagination = $page.url.searchParams.get('page')
  let pages = [
    { name: 1, href: `/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=1`},
    { name: 2, href: `/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=2`},
    { name: 3, href: `/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=3`},
    { name: 4, href: `/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=4`},
    { name: 5, href: `/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=5`},
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
      goto(`/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=1`)
    }else if(activeUrlPagination === null) {
      goto(`/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=1`)
    }else {
      goto(`/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=${parseInt(activeUrlPagination)-1}`)
    }
  };
  const next = () => {
    let lastPageNumber = pages.slice(-1)[0].name;
    if (activeUrlPagination === String(lastPageNumber)) {
      goto(`/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=${lastPageNumber}`)
    }else if(activeUrlPagination === null) {
      goto(`/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=2`)
    }else {
      goto(`/rekam-medis/${no_rm}/catatan-perkembangan-pasien-terintegrasi?page=${parseInt(activeUrlPagination)+1}`)
    }
  };
</script>
<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold">Catatan Perkembangan Pasien Terintegrasi</p>
    </div>
    <Button href="catatan-perkembangan-pasien-terintegrasi/tambah" color="green">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
      Tambah</Button>
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
  <Table hoverable={true} shadow>
    <TableHead>
      <TableHeadCell class="text-center">Tanggal & Jam</TableHeadCell>
      <TableHeadCell class="text-center">Profesional Pemberi Asuhan</TableHeadCell>
      <TableHeadCell class="text-center">Hasil Asesmen Pasien & Pemberian Layanan</TableHeadCell>
      <TableHeadCell class="text-center">Instruksi</TableHeadCell>
      <TableHeadCell class="text-center">Verifikasi DPJP</TableHeadCell>
    </TableHead>
    <TableBody> 
      {#each dummyCatatan as { tgl_jam, ppa, hasil, instruksi, dpjp }}
        <Catatan tgl_jam={tgl_jam} ppa={ppa} hasil={hasil} instruksi={instruksi} dpjp={dpjp}/>
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
</main>
