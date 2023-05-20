<script>
  import Icon from "@iconify/svelte";
  export let nama_dokter, spesialis, keterangan, status, permintaan_pasien
  import { Button, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  let defaultModal = false;
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Batalkan Ajuan Permintaaan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Pengajuan Dokter Berhasil Dibatalkan',
          showConfirmButton: false,
          timer: 1000
        })
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
  <TableBodyCell {tdClass}>{nama_dokter}</TableBodyCell>
  <TableBodyCell {tdClass}>{spesialis}</TableBodyCell>
  <TableBodyCell {tdClass}>{keterangan}</TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if permintaan_pasien}
      <Icon icon="material-symbols:check" class="mx-auto"/>
    {:else}
      -
    {/if}
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if status == "pending"}
      <Button color="yellow" size="sm">Pending</Button>
    {:else if status == "disetujui"}
      <Button color="green" size="sm">Disetujui</Button>
      <Button on:click={() => defaultModal = true} size="sm">Keterangan Dokter</Button>
    {:else}
      <Button color="red" size="sm">Ditolak</Button>
      <Button on:click={() => defaultModal = true} size="sm">Keterangan Dokter</Button>
    {/if}
  </TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <button on:click={()=>handleDelete("1")} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </TableBodyCell>
</TableBodyRow>

<Modal title="Keterangan Dokter" bind:open={defaultModal} autoclose size="sm">
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
</Modal>