<script>
  import Icon from "@iconify/svelte";
  export let no_rm, nama_pasien, pronounce, tgl_masuk, tgl_pulang, ruangan, jenis_ruangan
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { goto } from '$app/navigation';

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

  const handleGoToDokumen = (no_rm) => {
    goto(`/rekam-medis/${no_rm}`)
  }
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{pronounce}</span></TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_masuk}</TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_pulang}</TableBodyCell>
  <TableBodyCell {tdClass}>{ruangan}, {jenis_ruangan}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button on:click={()=>handleGoToDokumen(no_rm)}>
      <Icon icon="mdi:file-document-edit" class="mr-2" width="27" height="27"/>
      Lihat Rekam Medis
    </Button>
  </TableBodyCell>
</TableBodyRow>