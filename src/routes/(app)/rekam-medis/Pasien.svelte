<script>
  import Icon from "@iconify/svelte";
  export let no_rekam_medis, name, jenis_kelamin, tgl_masuk, tgl_pulang, nama_kamar, jenis_kamar, status_pulang
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";

  const handleGoToDokumen = (no_rekam_medis) => {
    goto(`/rekam-medis/${no_rekam_medis}`);
  };
</script>

<tr>
  <td>{no_rekam_medis}</td>
  <td
    >{name} ,<span class="italic"
      >{jenis_kelamin === "Perempuan" ? "Nn." : "Tn."}</span
    ></td
  >
  <td>{tgl_masuk ?? '-'}</td>
  <td>{tgl_pulang !== '0000-00-00' ? tgl_pulang ?? '-' : '-'}</td>
  <td>Kamar {nama_kamar}, Kelas {jenis_kamar}</td>
  <td>
    {#if !status_pulang}
      <Button size="xs" color="green">Sedang Berjalan</Button>
    {:else}
      <Button color="yellow">Selesai</Button>
    {/if}
  </td>
  <td>
    <Button size="xs" on:click={() => handleGoToDokumen(no_rekam_medis)} disabled={status_pulang ? true: false}>
      <Icon icon="mdi:file-document-edit" width="27" height="27" />
      Rekam Medis
    </Button>
  </td>
</tr>
