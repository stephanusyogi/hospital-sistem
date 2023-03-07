<script>
  import Icon from "@iconify/svelte";
  export let no_rm, nama_pasien, pronounce, tgl_masuk, tgl_pulang, ruangan, jenis_ruangan, status_rawat
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{pronounce}</span></TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_masuk}</TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_pulang}</TableBodyCell>
  <TableBodyCell {tdClass}>{ruangan}, {jenis_ruangan}</TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if status_rawat}
      <Button color="green">Sedang Berjalan</Button>
    {:else}
      <Button color="yellow">Selesai</Button>
    {/if}
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button>
      <Icon icon="mdi:file-document-edit" class="mr-2" width="27" height="27"/>
      Rekam Medis
    </Button>
  </TableBodyCell>
</TableBodyRow>