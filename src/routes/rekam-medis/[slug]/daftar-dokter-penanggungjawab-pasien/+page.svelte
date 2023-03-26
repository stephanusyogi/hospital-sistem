<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";
  import Dpjp from './Dpjp.svelte';


  let dummyDPJP = [
    {
      "diagnosa": "Pilek",
      "nama_dokter": "dr. Khal Drogo, Sp PD FINASIM",
      "spesialis": "Spesialis Penyakit Dalam",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP Utama",
    },
    {
      "diagnosa": "Kebanyakan Es",
      "nama_dokter": "dr. Viserys Targaryen, Sp B",
      "spesialis": "Spesialis Bedah Umum",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP Utama",
    },
    {
      "diagnosa": "Kurang Tidur",
      "nama_dokter": "dr. Ramsay Bolton, Sp AN",
      "spesialis": "Spesialis Anestesi",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP",
    },
    {
      "diagnosa": "Sepertinya Stress",
      "nama_dokter": "dr. Viserys II S, Sp.KJ",
      "spesialis": "Spesialis Penyakit Dalam",
      "tgl_mulai": "05/28/2023",
      "tgl_selesai": "08/28/2023",
      "status_dpjp": "DPJP",
    },
  ];
</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
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
      {#each dummyDPJP as { diagnosa, nama_dokter, spesialis, tgl_mulai, tgl_selesai, status_dpjp }}
        <Dpjp diagnosa={diagnosa} nama_dokter={nama_dokter} spesialis={spesialis} tgl_mulai={tgl_mulai} tgl_selesai={tgl_selesai} status_dpjp={status_dpjp}/>
      {/each}   
    </TableBody>
  </Table>
</main>