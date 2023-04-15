<script>
  import Icon from "@iconify/svelte";
  export let tableRowNumber, no_rm, nama_pasien, nik, jenis_kelamin, ttl, alamat;
  import { Button, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  import Riwayat from "./Riwayat.svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  let defaultModal = false;
  
  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
  ];
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{tableRowNumber}</TableBodyCell>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></TableBodyCell>
  <TableBodyCell {tdClass}>{nik}</TableBodyCell>
  <TableBodyCell {tdClass}>{jenis_kelamin}</TableBodyCell>
  <TableBodyCell {tdClass}>{ttl}</TableBodyCell>
  <TableBodyCell {tdClass}>{alamat}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button on:click={() => defaultModal = true} color="green">
      <Icon icon="material-symbols:history" class="mr-2" width="27" height="27"/>
      Riwayat Rekam Medis
    </Button>
    <Modal size="xl" placement="center" title="Riwayat Rekam Medis Rawat Inap" bind:open={defaultModal} autoclose>
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">Nomor Rekam Medis</TableHeadCell>
          <TableHeadCell class="text-center">Nama</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Masuk</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Keluar</TableHeadCell>
          <TableHeadCell class="text-center">Ruangan</TableHeadCell>
          <TableHeadCell class="text-center">Aksi</TableHeadCell>
        </TableHead>
        <TableBody>    
          {#each dummyUsers as {no_rm, nama_pasien, pronounce, tgl_masuk, tgl_pulang, ruangan, jenis_ruangan}}
            <Riwayat no_rm={no_rm} nama_pasien={nama_pasien} pronounce={pronounce} tgl_masuk={tgl_masuk} tgl_pulang={tgl_pulang} ruangan={ruangan} jenis_ruangan={jenis_ruangan}/>
          {/each}
        </TableBody>
      </Table>
      <svelte:fragment slot='footer'>
        <Button color="alternative">Tutup</Button>
      </svelte:fragment>
    </Modal>
  </TableBodyCell>
</TableBodyRow>