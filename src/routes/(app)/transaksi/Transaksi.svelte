<script>
  import Icon from "@iconify/svelte";
  export let tgl_transaksi, nomor, pasien, asuransi ,total, status_bayar
  import { Button } from "flowbite-svelte";
  import Swal from 'sweetalert2'

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
<tr>
  <td>{tgl_transaksi}</td>
  <td>{nomor}</td>
  <td>{pasien}</td>
  <td>{asuransi}</td>
  <td>Rp. {total}</td>
  <td>
    {#if status_bayar}
      <Button color="green">Telah Dibayar</Button>
    {:else}
      <Button color="yellow">Belum Dibayar</Button>
    {/if}
  </td>
  <td>
    <Button color="alternative" href="/transaksi/21314415102" size="sm">
      <Icon icon="material-symbols:receipt-long" class="sm:mr-2"/>
        <span class="hidden sm:block">Lihat Nota</span>
    </Button>
  </td>
  <td>
    <div class="flex flex-wrap justify-center gap-2">
      <button on:click={()=>handleDelete("1")} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </td>
</tr>