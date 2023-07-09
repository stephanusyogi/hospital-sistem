<script>

  import { Button, Input, Label, Select, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { onMount } from "svelte";
  
  let status_obat = [
    {value:"Obat Resep", name: "Obat Resep"},
    {value:"Obat Non Resep", name: "Obat Non-Resep"},
  ]
  
  let status_perawatan = [
    {value:"Lanjut", name: "Lanjut"},
    {value:"Tunda", name: "Tunda"},
    {value:"Henti", name: "Henti"},
  ]

  let status_pulang = [
    {value:"Lanjut", name: "Lanjut"},
    {value:"Henti", name: "Henti"},
  ]

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

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Rekonsiliasi?',
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
</script>


<main>
  <form id="form" on:submit|preventDefault={handleSubmit} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37.1 Formulir Tambah Rekonsiliasi Obat</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green">
        Simpan</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label>Resep/Non-Resep: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_obat} name="resep_non_resep" required/>
        </Label>
      </div>
      <div class="my-2">
        <Label>Nama Obat: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={obat} name="nama_obat" required/>
        </Label>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Dosis: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="dosis" required/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Kandungan: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="kandungan" required/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Frekuensi: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="frekuensi" required/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Sumber Obat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="sumber_obat" required/>
      </div>
      <div class="my-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="" class="mb-2">Tanggal Mulai: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input type="date" name="tanggal_mulai" required/>
          </div>
          <div>
            <Label for="" class="mb-2">Tanggal Stop: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input type="date" name="tanggal_stop" required/>
          </div>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Jumlah Obat Tersisa: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input placeholder="Masukkan Jumlah Obat Tersisa" name="jumlah_obat_tersisa" required/>
      </div>
      <div class="my-2">
        <Label>Status Obat Saat Perawatan: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_perawatan} name="status_obat_saat_perawatan" required/>
        </Label>
      </div>
      <div class="my-2">
        <Label>Status Obat Saat Perawatan: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_pulang} nane="status_obat_saat_pulang" required/>
        </Label>
      </div>
    </div>
  </form>
</main>