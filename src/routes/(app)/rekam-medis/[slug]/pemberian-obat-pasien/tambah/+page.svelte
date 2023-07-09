<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button,Input, Label, Select, Textarea } from "flowbite-svelte";
  import { onMount } from "svelte";

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Obat Pasien?',
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
  export let data
  export let form
  let obat = []
  onMount(()=>{
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.obat){
      data.obat.forEach((item) => {
        obat.push({
          value: item.nama_obat,
          name: `${item.nama_obat} - ${item.harga}`,
        });
      })
    }
  })
</script>

<main>
  <form id="form" on:submit|preventDefault={handleSubmit} method="post">
    <div class="flex flex-wrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37 Pemberian Obat Pasien</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green" size="sm">
        Tambahkan</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="my-2">
        <Label>Obat:  <span class="text-sm text-red-500 italic">*</span>
          <Select name="nama_obat" class="mt-2" items={obat} required/>
        </Label>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Dosis Obat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input id="" placeholder="" name="dosis" required/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Rute Obat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input id="" placeholder="" name="rute" required/>
      </div>
    </div>
  </form>
</main>