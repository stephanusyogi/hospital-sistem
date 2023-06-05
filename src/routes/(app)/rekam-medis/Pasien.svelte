<script>
  import Icon from "@iconify/svelte";
  export let no_rm,
    nama_pasien,
    pronounce,
    tgl_masuk,
    tgl_pulang,
    ruangan,
    jenis_ruangan,
    status_rawat;
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";

  const handleGoToDokumen = (no_rm) => {
    goto(`/rekam-medis/${no_rm}`);
  };
</script>

<tr>
  <td>{no_rm}</td>
  <td>{nama_pasien} ,<span class="italic">{pronounce}</span></td>
  <td>{tgl_masuk}</td>
  <td>{tgl_pulang}</td>
  <td>{ruangan}, {jenis_ruangan}</td>
  <td>
    {#if status_rawat}
      <Button size="xs" color="green">Sedang Berjalan</Button>
    {:else}
      <Button color="yellow">Selesai</Button>
    {/if}
  </td>
  <td>
    <Button size="xs" on:click={() => handleGoToDokumen(no_rm)}>
      <Icon icon="mdi:file-document-edit" width="27" height="27" />
      Rekam Medis
    </Button>
  </td>
</tr>
