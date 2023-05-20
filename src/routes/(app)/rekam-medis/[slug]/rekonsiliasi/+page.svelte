<script>
  import Icon from "@iconify/svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Button, Dropdown, DropdownItem, Pagination, Search, TabItem, Table, TableBody, TableHead, TableHeadCell, Tabs } from "flowbite-svelte";
  import Obat from "./Obat.svelte";

  let dummyObatResep = [
    {
      "nama": "Artesunate tablet 50 mg",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Henti",
      "catatan": "mantap",
    },
    {
      "nama": "Amodiaquine anhydrida tablet 200 mg",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Henti",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
    {
      "nama": "Albendazol suspensi 200 mg/5 ml",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Henti",
      "catatan": "mantap",
    },
    {
      "nama": "Alopurinol tablet 100 mg",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
    {
      "nama": "Ambroxol sirup 15 mg/ml",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Henti",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
  ];
  
  let dummyObatNonResep = [
    {
      "nama": "Tolak Angin",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Henti",
      "catatan": "mantap",
    },
    {
      "nama": "Antangin Mint",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Henti",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
  ];
  
</script>
<main>
  <div class="flex items-center justify-between">
    <p class="text-xl font-semibold">Rekonsiliasi</p>
    <div class="flex flex-wrap gap-4">
      <Button color="green" href="rekonsiliasi/tambah" size="sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="25" height="25" viewBox="0 0 48 48"><mask id="ipSMedicineBottleOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M13 7a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6H16a3 3 0 0 1-3-3Zm.1 10.12A3 3 0 0 1 15.437 16h17.124a3 3 0 0 1 2.339 1.12l4.438 5.523a3 3 0 0 1 .661 1.88V41a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V24.523a3 3 0 0 1 .661-1.88l4.438-5.522Z"/><path stroke="#000" stroke-linecap="round" d="M18 30h12m-6-6v12"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMedicineBottleOne0)"/></svg>
        Tambah Rekonsiliasi Obat</Button>
    </div>
  </div>
  <hr class="my-5">
  <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem open title="Obat Resep" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">Nama Obat & Dosis</TableHeadCell>
          <TableHeadCell class="text-center">Kandungan</TableHeadCell>
          <TableHeadCell class="text-center">Frekuensi</TableHeadCell>
          <TableHeadCell class="text-center">Sumber Obat</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Mulai</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Stop</TableHeadCell>
          <TableHeadCell class="text-center">Jumlah Obat Tersisa</TableHeadCell>
          <TableHeadCell class="text-center">Status Obat Saat Perawatan</TableHeadCell>
          <TableHeadCell class="text-center">Status Obat Saat Pulang</TableHeadCell>
          <TableHeadCell class="text-center">Catatan</TableHeadCell>
          <TableHeadCell class="text-center">Aksi</TableHeadCell>
        </TableHead>
        <TableBody> 
          {#each dummyObatResep as {nama, kandungan, frekuensi, sumber_obat, tgl_mulai, tgl_stop, jml_obat_tersisa, status_obat_perawatan, status_obat_pulang, catatan }}
            <Obat nama={nama}, kandungan={kandungan} frekuensi={frekuensi} sumber_obat={sumber_obat} tgl_mulai={tgl_mulai} tgl_stop={tgl_stop} jml_obat_tersisa={jml_obat_tersisa} status_obat_perawatan={status_obat_perawatan} status_obat_pulang={status_obat_pulang} catatan={catatan}/>
          {/each}   
        </TableBody>
      </Table>
    </TabItem>
    <TabItem title="Obat Non Resep (Contoh: Produk OTC, Herbal, dll)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">Nama Obat & Dosis</TableHeadCell>
          <TableHeadCell class="text-center">Kandungan</TableHeadCell>
          <TableHeadCell class="text-center">Frekuensi</TableHeadCell>
          <TableHeadCell class="text-center">Sumber Obat</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Mulai</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Stop</TableHeadCell>
          <TableHeadCell class="text-center">Jumlah Obat Tersisa</TableHeadCell>
          <TableHeadCell class="text-center">Status Obat Saat Perawatan</TableHeadCell>
          <TableHeadCell class="text-center">Status Obat Saat Pulang</TableHeadCell>
          <TableHeadCell class="text-center">Catatan</TableHeadCell>
          <TableHeadCell class="text-center">Aksi</TableHeadCell>
        </TableHead>
        <TableBody> 
          {#each dummyObatNonResep as {nama, kandungan, frekuensi, sumber_obat, tgl_mulai, tgl_stop, jml_obat_tersisa, status_obat_perawatan, status_obat_pulang, catatan }}
            <Obat nama={nama}, kandungan={kandungan} frekuensi={frekuensi} sumber_obat={sumber_obat} tgl_mulai={tgl_mulai} tgl_stop={tgl_stop} jml_obat_tersisa={jml_obat_tersisa} status_obat_perawatan={status_obat_perawatan} status_obat_pulang={status_obat_pulang} catatan={catatan}/>
          {/each}   
        </TableBody>
      </Table>
    </TabItem>
  </Tabs>
</main>