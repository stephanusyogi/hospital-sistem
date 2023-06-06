<script>

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Button, Dropdown, DropdownItem, Pagination, Search, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Frekuensi from './Frekuensi.svelte';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../../tableCustom.css";

  let dummyFrekuensi = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "farmasi": 1,
      "perawat": 1,
      "pasien": 1,
      "rotd": 1,
      "catatan" : "-"
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "farmasi": 1,
      "perawat": 0,
      "pasien": 0,
      "rotd": 1,
      "catatan" : "-"
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "farmasi": 1,
      "perawat": 1,
      "pasien": 0,
      "rotd": 0,
      "catatan" : "-"
    },
  ];

  const id_obat = $page.params.id_obat;
  const no_rm = $page.params.slug;
  
  const handler = new DataHandler(dummyFrekuensi, { rowsPerPage: 10 });
  const rows = handler.getRows();

</script>
<main>
  <div class="flex flex-wrap items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37 Pemberian Obat Pasien</p>
      <p class="text-xs sm:text-sm font-medium">Nama Obat: Lorem Ipsum</p>
      <p class="text-xs sm:text-sm font-medium">Dosis Obat: 250mL</p>
    </div>
    <div class="flex items-center gap-2">
      <Button href="/rekam-medis/{no_rm}/pemberian-obat-pasien" color="yellow" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5l-5 5Z"/></svg><span class="hidden sm:block">Kembali</span></Button>
      <Button href="{id_obat}/tambah-frekuensi" color="green" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah Frekuensi</span></Button>
    </div>
  </div>
  <hr class="my-5">
  <section class="table-section">
    <Datatable {handler}>
      <table>
        <thead>
          <tr>
            <Th {handler} orderBy="tgl_jam">Tanggal & Jam</Th>
            <Th {handler} orderBy="farmasi">Farmasi</Th>
            <Th {handler} orderBy="perawat">Perawat</Th>
            <Th {handler} orderBy="pasien">Pasien</Th>
            <Th {handler} orderBy="rotd">ROTD</Th>
            <Th {handler} orderBy="catatan">Catatan</Th>
            <Th {handler} orderBy="aksi">Aksi</Th>
          </tr>
        </thead>
        <tbody>
          {#each $rows as { tgl_jam, farmasi, perawat,pasien ,rotd,catatan }}
            <Frekuensi tgl_jam={tgl_jam} farmasi={farmasi} perawat={perawat} pasien={pasien} rotd={rotd} catatan={catatan}/>
          {/each}   
        </tbody>
      </table>
    </Datatable>
  </section>
</main>