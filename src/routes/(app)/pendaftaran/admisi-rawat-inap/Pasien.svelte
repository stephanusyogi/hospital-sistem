<script>
  export let tableRowNumber, no_rm, nama_pasien, nik, jenis_kelamin, asuransi;
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

  const handlePasien = (id) => {
    Swal.fire({
      title: 'Lanjutkan Pemeriksaan Pasien IGD/Poliklinik?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Lanjutkan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto("/pendaftaran/21314415102")
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{tableRowNumber}</TableBodyCell>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></TableBodyCell>
  <TableBodyCell {tdClass}>{nik}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <div class="box p-4">
      {#if asuransi.nama === "BPJS"}
        <p class="text-center text-md font-medium">{asuransi.nama}</p>
        <p class="text-sm">No. Peserta: {asuransi.no_peserta}</p>
        <p class="text-sm">Status: 
          {#if asuransi.status_aktif }
          <Button size="xs" color="green">Peserta Aktif</Button>
          {:else}
          <Button size="xs" color="yellow">Peserta Tidak Aktif</Button>
          {/if}
        </p>
      {:else if asuransi.nama === "Umum/Mandiri"}
        <p class="text-center text-md font-medium">{asuransi.nama}</p>
      {:else}
        <p class="text-center text-md font-medium">{asuransi.nama_asuransi}</p>
        <p class="text-sm">No. Peserta: {asuransi.no_peserta}</p>
        <p class="text-sm">Status: 
          {#if asuransi.status_aktif }
          <Button size="xs" color="green">Peserta Aktif</Button>
          {:else}
          <Button size="xs" color="yellow">Peserta Tidak Aktif</Button>
          {/if}
        </p>
      {/if}
    </div>
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button on:click={()=>{handlePasien("1")}}>Pemeriksaan IGD/Poliklinik</Button>
  </TableBodyCell>
</TableBodyRow>