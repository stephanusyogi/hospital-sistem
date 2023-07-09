<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button, Label, Select, Textarea } from "flowbite-svelte";
  import { onMount } from "svelte";

  export let form


  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Catatan?',
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
  <form id="form" on:submit|preventDefault={handleSubmit} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Catatan Keperawatan</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green" size="sm">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 gap-4">
      <div class="my-2">
        <Label>Catatan Perawat:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="catatan" row="4" required/>
      </div>
    </div>
  </form>
</main>