<script>
  import Icon from "@iconify/svelte";
  export let nama, jenis, harga, kuota, tersedia
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Ruangan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Ruangan Berhasil Dihapus',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{nama}</TableBodyCell>
  <TableBodyCell {tdClass}>{jenis}</TableBodyCell>
  <TableBodyCell {tdClass}>Rp. {harga}</TableBodyCell>
  <TableBodyCell {tdClass}>{kuota}</TableBodyCell>
  <TableBodyCell {tdClass}>
    {#if tersedia === "full"}
      <Button color="red">Full</Button>
    {:else}
      {tersedia}
    {/if}
  </TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <a href="/ruangan/1" class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></a>
      <button on:click={()=>handleDelete("1")} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </TableBodyCell>
</TableBodyRow>