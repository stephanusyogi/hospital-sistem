<script>

  import { Button, Dropzone, Fileupload, Label, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { onMount } from "svelte";

  export let form

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Kopi Resep?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    })
  }
  
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  })
</script>

<main>
  <form id="form" on:submit|preventDefault={handleSubmit} method="post" enctype="multipart/form-data">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.22 Kopi Resep</p>
      </div>
      <Button type="submit" color="green" size="sm">
        Tambah</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2 sm:col-span-2">
        <Label>Uraian:</Label>
        <Textarea id="" placeholder="Masukkan Uraian" rows="2" name="uraian"/>
      </div>
      <div class="my-2 sm:col-span-2 ">
        <Label>Upload File:</Label>
        <Fileupload name="file_dir"/>
      </div>
    </div>
  </form>
</main>