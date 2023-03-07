<script>
  import Icon from "@iconify/svelte";
  export let tgl_transaksi, nomor, pasien, asuransi ,total, status
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{tgl_transaksi}</TableBodyCell>
  <TableBodyCell {tdClass}>{nomor}</TableBodyCell>
  <TableBodyCell {tdClass}>{pasien}</TableBodyCell>
  <TableBodyCell {tdClass}>{asuransi}</TableBodyCell>
  <TableBodyCell {tdClass}>Rp. {total}</TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if status}
      <Button color="green">Telah Dibayar</Button>
    {:else}
      <Button color="yellow">Belum Dibayar</Button>
    {/if}
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button color="alternative">
      <Icon icon="subway:print" class="mr-2"/>
      Cetak Nota
    </Button>
  </TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <a href="/" class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></a>
      <a href="/" class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></a>
    </div>
  </TableBodyCell>
</TableBodyRow>