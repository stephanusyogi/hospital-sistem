<script>
  import Icon from "@iconify/svelte";
  export let tgl_transaksi, nomor, pasien, asuransi ,total, status_bayar
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from 'sweetalert2'

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Nota Pembayaran?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Nota Pembayaran Berhasil Dihapus',
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
  <TableBodyCell {tdClass}>{tgl_transaksi}</TableBodyCell>
  <TableBodyCell {tdClass}>{nomor}</TableBodyCell>
  <TableBodyCell {tdClass}>{pasien}</TableBodyCell>
  <TableBodyCell {tdClass}>{asuransi}</TableBodyCell>
  <TableBodyCell {tdClass}>Rp. {total}</TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if status_bayar}
      <Button color="green">Telah Dibayar</Button>
    {:else}
      <Button color="yellow">Belum Dibayar</Button>
    {/if}
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button color="alternative" href="/transaksi/21314415102">
      <Icon icon="material-symbols:receipt-long" class="mr-2"/>
      Lihat Nota
    </Button>
  </TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <button on:click={()=>handleDelete("1")} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </TableBodyCell>
</TableBodyRow>