<script>
  export let tableRowNumber, name, no_rekam_medis, nik, nama_asuransi, nomor_asuransi, status_asuransi;
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";

  const handlePasien = (id) => {
    Swal.fire({
      title: "Lanjutkan Pemeriksaan Awal?",
      html: `<p>No. RM: ${no_rekam_medis}</p><p>Nama: ${name}</p>`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Lanjutkan",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto(`/pendaftaran/${id}`);
      }
    });
  };
</script>

<tr>
  <td>{tableRowNumber}</td>
  <td>{no_rekam_medis}</td>
  <td>{name}</td>
  <td>{nik}</td>
  <td>
    <div class="box p-4">
      {#if nama_asuransi === "BPJS"}
        <p class="text-center text-md font-medium">{nama_asuransi}</p>
        <p class="text-sm">No. Peserta: {nomor_asuransi}</p>
        <p class="text-sm">
          Status:
          {#if status_asuransi === true}
            <Button size="xs" color="green">Peserta Aktif</Button>
          {:else}
            <Button size="xs" color="yellow">Peserta Tidak Aktif</Button>
          {/if}
        </p>
      {:else if nama_asuransi === "Umum/Mandiri"}
        <p class="text-center text-md font-medium">{nama_asuransi}</p>
      {:else}
        <p class="text-center text-md font-medium">{nama_asuransi}</p>
        <p class="text-sm">No. Peserta: {nomor_asuransi}</p>
        <p class="text-sm">
          Status:
          {#if status_asuransi === true}
            <Button size="xs" color="green">Peserta Aktif</Button>
          {:else}
            <Button size="xs" color="yellow">Peserta Tidak Aktif</Button>
          {/if}
        </p>
      {/if}
    </div>
  </td>
  <td>
    <Button
      on:click={() => {
        handlePasien(no_rekam_medis);
      }}>Pemeriksaan Awal</Button
    >
  </td>
</tr>
