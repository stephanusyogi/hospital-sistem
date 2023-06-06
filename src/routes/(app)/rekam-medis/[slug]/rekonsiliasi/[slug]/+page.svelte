<script>

  import { Button, Input, Label, Select, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  
  let status_obat = [
    {value:"resep", name: "Obat Resep"},
    {value:"non_resep", name: "Obat Non-Resep"},
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

  let obat = [
    {value:"Artesunate", name: "Artesunate"},
    {value:"Amodiaquine anhydrida", name: "Amodiaquine anhydrida"},
    {value:"Alopurinol", name: "Alopurinol"},
    {value:"Albendazol", name: "Albendazol"},
    {value:"Ambroxol sirup", name: "Ambroxol sirup"},
  ]

  const handleSubmit = () => {
    Swal.fire({
      title: 'Update Obat?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Obat Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/rekonsiliasi")
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
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37.1 Formulir Update Rekonsiliasi Obat</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green" size="sm">
        Simpan</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label>Resep/Non-Resep: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_obat}/>
        </Label>
      </div>
      <div class="my-2">
        <Label>Nama Obat & Dosis: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={obat}/>
        </Label>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Kandungan: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea rows="2" placeholder="Masukkan Kandungan"/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Frekuensi: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea rows="2" placeholder="Masukkan Frekuensi"/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Sumber Obat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea rows="2" placeholder="Masukkan Sumber Obat"/>
      </div>
      <div class="my-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="" class="mb-2">Tanggal Mulai: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input type="date"/>
          </div>
          <div>
            <Label for="" class="mb-2">Tanggal Stop: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input type="date"/>
          </div>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Jumlah Obat Tersisa: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input placeholder="Masukkan Jumlah Obat Tersisa"/>
      </div>
      <div class="my-2">
        <Label>Status Obat Saat Perawatan: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_perawatan}/>
        </Label>
      </div>
      <div class="my-2">
        <Label>Status Obat Saat Perawatan: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_pulang}/>
        </Label>
      </div>
    </div>
  </form>
</main>