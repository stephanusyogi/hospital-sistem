<script>
  export let tableRowNumber,
    no_rm,
    nama_pasien,
    nik,
    jenis_kelamin,
    cara_pembayaran,
    nama_asuransi,
    status_asuransi,
    no_asuransi;
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";

  const handlePasien = (id) => {
    Swal.fire({
      title: "Lanjutkan Pemeriksaan Pasien IGD/Poliklinik?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Lanjutkan",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto("/pendaftaran/21314415102");
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Aksi Dibatalkan",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
</script>

<tr>
  <td>{tableRowNumber}</td>
  <td>{no_rm}</td>
  <td>{nik}</td>
  <td
    >{nama_pasien} ,<span class="italic"
      >{jenis_kelamin === "Perempuan" ? "Nn." : "Tn."}</span
    ></td
  >
  <td>
    <div class="box p-4">
      {#if cara_pembayaran === "BPJS"}
        <p class="text-center text-md font-medium">{nama_asuransi}</p>
        <p class="text-sm">No. Peserta: {no_asuransi}</p>
        <p class="text-sm">
          Status:
          {#if status_asuransi === "Aktif"}
            <Button size="xs" color="green">Peserta Aktif</Button>
          {:else}
            <Button size="xs" color="yellow">Peserta Tidak Aktif</Button>
          {/if}
        </p>
      {:else if cara_pembayaran === "Umum/Mandiri"}
        <p class="text-center text-md font-medium">{cara_pembayaran}</p>
      {:else}
        <p class="text-center text-md font-medium">{nama_asuransi}</p>
        <p class="text-sm">No. Peserta: {no_asuransi}</p>
        <p class="text-sm">
          Status:
          {#if status_asuransi === "Aktif"}
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
        handlePasien("1");
      }}>Pemeriksaan IGD/Poliklinik</Button
    >
  </td>
</tr>
