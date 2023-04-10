<script>
  import Icon from "@iconify/svelte";
  export let uraian, created_at
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Kopi Resep?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: ' Kopi Resep Berhasil Dihapus',
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

<div class="border p-10 my-2 text-sm relative">
  <div class="grid grid-cols-2 gap-6">
    <p class="font-medium">Uraian:</p>
    <p class="font-light text-right">{uraian}</p>
  </div>
  <hr class="my-2">
  <div class="grid grid-cols-2 gap-6">
    <p class="font-medium">File Scan:</p>
    <p class="font-light text-right"><a href="/" target="_blank" rel="noopener noreferrer">Lihat File</a></p>
  </div>
  <hr class="my-2">
  <div class="grid grid-cols-2 gap-6">
    <p class="font-medium">Created At:</p>
    <p class="font-light text-right">{created_at}</p>
  </div>
  <div class="absolute right-2 top-2">
    <button on:click={()=>handleDelete("1")} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="30" height="30"/></button>
  </div>
</div>