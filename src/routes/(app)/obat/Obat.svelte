<script>
  import Icon from "@iconify/svelte";
  export let kode,nama, harga, user_data
  import { TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Obat/Bahan Habis Pakai?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Obat/Bahan Berhasil Dihapus',
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
  <TableBodyCell {tdClass}>{kode}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama}</TableBodyCell>
  <TableBodyCell {tdClass}>Rp. {harga}</TableBodyCell>
  {#if user_data.role === "Farmasi"}
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <a href="/obat/1" class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></a>
      <button on:click={()=>handleDelete("1")} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </TableBodyCell>
  {/if}
</TableBodyRow>