<script>

  import { Button, TableBodyCell, TableBodyRow, Tooltip } from "flowbite-svelte";
  export let tgl_jam, deskripsi_obat, dpjp;
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Obat?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Obat Berhasil Dihapus',
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
  <td>{tgl_jam}</td>
  <td>
    <div class="mb-2">
        <div class="flex flex-wrap justify-between gap-2 lg:gap-6 border p-2 lg:p-4 text-sm col-span-2">
          <p class="font-medium">Nama Obat:</p>
          <p class="font-light sm:text-right">{deskripsi_obat.nama}</p>
        </div>
        <div class="flex flex-wrap justify-between gap-2 lg:gap-6  border p-2 lg:p-4 text-sm col-span-2">
          <p class="font-medium">Dosis:</p>
          <p class="font-light sm:text-right">{deskripsi_obat.dosis}</p>
        </div>
        <div class="flex flex-wrap justify-between gap-2 lg:gap-6 border p-2 lg:p-4 text-sm col-span-2">
          <p class="font-medium">Rute:</p>
          <p class="font-light sm:text-right">{deskripsi_obat.rute}</p>
        </div>
    </div>
  </td>
  <td>{dpjp}</td>
  <td>
    <div class="flex flex-wrap sm:flex-nowrap flex-col gap-6">
      <Button class="w-fit" id="tooltip-pemberian-obat" href="pemberian-obat-pasien/OBT198241" color="yellow" size="sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.413-.588T2 19V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.588 1.413T20 21H4Zm1-4h5v-2H5v2Zm9.55-2l4.95-4.95l-1.425-1.425l-3.525 3.55l-1.425-1.425l-1.4 1.425L14.55 15ZM5 13h5v-2H5v2Zm0-4h5V7H5v2Z"/></svg></Button>
      <Tooltip triggeredBy="#tooltip-pemberian-obat">Detail Pemberian Obat</Tooltip>
      <Button class="w-fit" color="red" on:click={()=>handleDelete("1")} size="sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M224 56a8 8 0 0 1-8 8h-8v144a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64h-8a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM88 32h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16Z"/></svg></Button>
    </div>
  </td>
</tr>
