<script>

  import { Button, Dropzone, Label, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Hasil Pemeriksaan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Hasil Pemeriksaan Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/hasil-pemeriksaan-penunjang")
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

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.21 Hasil Pemeriksaan Penunjang</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green" size="sm" >
        Tambah</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2 sm:col-span-2">
        <Label>Uraian:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="Masukkan Uraian" rows="2" name="diagnosa"/>
      </div>
      <div class="my-2 sm:col-span-2">
        <Label for="" class="mb-2">Upload Scan Hasil Pemeriksaan: <span class="text-sm text-red-500 italic">*</span></Label>
        <Dropzone id='dropzone'>
          <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </Dropzone>
    </div>
  </form>
</main>