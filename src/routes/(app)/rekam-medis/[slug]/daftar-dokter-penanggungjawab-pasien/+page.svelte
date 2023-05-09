<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";
  import Dpjp from './Dpjp.svelte';


  let dummyDPJP = [
    {
      "diagnosa" : "Pilek",
      "nama_dokter": "dr. Khal Drogo, Sp PD FINASIM",
      "spesialis": "Spesialis Penyakit Dalam",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP Utama",
    },
    {
      "diagnosa" : "Pilek",
      "nama_dokter": "dr. Ramsay Bolton, Sp AN",
      "spesialis": "Spesialis Anestesi",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP",
    },
    {
      "diagnosa" : "Pilek",
      "nama_dokter": "dr. Viserys II S, Sp.KJ",
      "spesialis": "Spesialis Penyakit Dalam",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP",
    },
  ];
</script>

<main>
  <div class="flex items-center justify-between">
    <p class="text-xl font-semibold">Dokter Penanggung Jawab Pasien</p>
    <div class="flex flex-wrap gap-4">
      <Button color="green" href="daftar-dokter-penanggungjawab-pasien/tambah">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
        Tambah DPJP</Button>
    </div>
  </div>
  <hr class="my-5">
  <Table hoverable={true}>
    <TableHead>
      <TableHeadCell class="text-center">Diagnosa</TableHeadCell>
      <TableHeadCell class="text-center">Nama Dokter</TableHeadCell>
      <TableHeadCell class="text-center">Spesialis</TableHeadCell>
      <TableHeadCell class="text-center">Tanggal Mulai</TableHeadCell>
      <TableHeadCell class="text-center">Tanggal Selesai</TableHeadCell>
      <TableHeadCell class="text-center">Status DPJP</TableHeadCell>
      <TableHeadCell class="text-center">Aksi</TableHeadCell>
    </TableHead>
    <TableBody> 
      {#each dummyDPJP as {diagnosa, nama_dokter, spesialis, tgl_mulai, tgl_selesai, status_dpjp }}
        <Dpjp diagnosa={diagnosa} nama_dokter={nama_dokter} spesialis={spesialis} tgl_mulai={tgl_mulai} tgl_selesai={tgl_selesai} status_dpjp={status_dpjp}/>
      {/each}   
    </TableBody>
  </Table>
</main>