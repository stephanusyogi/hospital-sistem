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
    {value:"Artesunate tablet 50 mg", name: "Artesunate tablet 50 mg"},
    {value:"Amodiaquine anhydrida tablet 200 mg", name: "Amodiaquine anhydrida tablet 200 mg"},
    {value:"Alopurinol tablet 100 mg", name: "Alopurinol tablet 100 mgg"},
    {value:"Albendazol suspensi 200 mg/5 ml", name: "Albendazol suspensi 200 mg/5 ml"},
    {value:"Ambroxol sirup 15 mg/ml", name: "Ambroxol sirup 15 mg/ml"},
  ]

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Obat?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Obat Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          goto("/rekam-medis/00123141/rekonsiliasi")
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


<main>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Formulir Tambah Rekonsiliasi Obat</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-4 gap-4">
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
        <div class="grid grid-cols-2 gap-2">
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
        <Label>Status Obat Saat Perawatn: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_perawatan}/>
        </Label>
      </div>
      <div class="my-2">
        <Label>Status Obat Saat Perawatn: <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={status_pulang}/>
        </Label>
      </div>
    </div>
  </form>
</main>