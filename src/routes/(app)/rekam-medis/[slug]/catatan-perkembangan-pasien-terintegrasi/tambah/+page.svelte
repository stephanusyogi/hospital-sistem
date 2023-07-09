<script>

  import Swal from "sweetalert2";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Button, Label, Select, Textarea } from "flowbite-svelte";

  import { onMount } from "svelte";

  export let form

  const no_rm = $page.params.slug;


  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Catatan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
        const form = document.getElementById('form');
        form.submit()
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
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.16 Catatan Perkembangan Pasien Terintegrasi</p>
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
        <Label>Hasil Asesmen Pasien & Pemberian Pelayanan:  <span class="text-sm text-red-500 italic">*</span></Label>
        <p class="text-sm space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">Tulis dengan format SOAP, disertai sasaran</p>
        <br>
        <Label>Subjective:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="subjective" row="4" required/>
        <Label>Objective:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="objective" row="4" required/>
        <Label>Assessment:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="assessment" row="4" required/>
        <Label>Plan:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="plan" row="4" required/>
        <Label>Sasaran:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="sasaran" row="4" required/>
      </div>
      <div class="my-2">
        <Label>Insturksi:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="instruksi" row="4" required/>
      </div>
    </div>
  </form>
</main>