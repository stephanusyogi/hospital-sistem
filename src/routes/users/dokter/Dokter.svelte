<script>
  import Icon from "@iconify/svelte";
  export let nama_dokter, spesialis
  import { TableBodyCell, TableBodyRow } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{nama_dokter}</TableBodyCell>
  <TableBodyCell {tdClass}>Dokter {spesialis}</TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <a href="/" class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></a>
      <a href="/" class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></a>
    </div>
  </TableBodyCell>
</TableBodyRow>