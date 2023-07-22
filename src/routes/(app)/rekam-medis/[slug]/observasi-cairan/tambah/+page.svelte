<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button,Input,  Label, Select, Textarea } from "flowbite-svelte";
  import { onMount } from "svelte";

  export let form


  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Observasi?',
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
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Observasi Cairan</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green" size="sm">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-2 gap-4">
      <div class="my-2">
        <Label>Nama Cairan Input:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="nama_input" required/>
      </div>
      <div class="my-2">
        <Label>Jumlah Cairan Input:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="jumlah_input" required/>
      </div>
      <div class="my-2">
        <Label>Nama Cairan Output:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="nama_output" required/>
      </div>
      <div class="my-2">
        <Label>Jumlah Cairan Output:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="jumlah_output" required/>
      </div>
    </div>
  </form>
</main>