<script>
  import Icon from "@iconify/svelte";
  export let nama, kandungan, frekuensi, sumber_obat, tgl_mulai, tgl_stop, jml_obat_tersisa, status_obat_perawatan, status_obat_pulang, catatan
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{nama}</TableBodyCell>
  <TableBodyCell {tdClass}>{kandungan}</TableBodyCell>
  <TableBodyCell {tdClass}>{frekuensi}</TableBodyCell>
  <TableBodyCell {tdClass}>{sumber_obat}</TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_mulai}</TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_stop}</TableBodyCell>
  <TableBodyCell {tdClass}>{jml_obat_tersisa}</TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if status_obat_perawatan === "Tunda" }
      <Button size="sm" color="yellow">Tunda</Button>
    {:else if status_obat_perawatan === "Lanjut"}
      <Button size="sm" color="green">Lanjut</Button>
    {:else}
      <Button size="sm" color="red">Henti</Button>
    {/if}
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if status_obat_pulang === "Tunda" }
      <Button size="sm" color="yellow">Tunda</Button>
    {:else if status_obat_pulang === "Lanjut"}
      <Button size="sm" color="green">Lanjut</Button>
    {:else}
      <Button size="sm" color="red">Henti</Button>
    {/if}
  </TableBodyCell>
  <TableBodyCell {tdClass}>{catatan}</TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <a href="/" class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></a>
      <a href="/" class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></a>
    </div>
  </TableBodyCell>
</TableBodyRow>