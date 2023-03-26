<script>
  import Icon from "@iconify/svelte";
  export let no_rm, nama_pasien, pronounce;
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{pronounce}</span></TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button color="yellow">
      <Icon icon="ic:baseline-remove-red-eye" class="mr-2" width="27" height="27"/>
      Detail
    </Button>
    <Button color="green">
      <Icon icon="material-symbols:history" class="mr-2" width="27" height="27"/>
      Riwayat Rekam Medis
    </Button>
  </TableBodyCell>
</TableBodyRow>