<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button, Label, Select, Textarea } from "flowbite-svelte";


  let dpjp = [
    {value:"dr. Khal Drogo, Sp PD FINASIM", name: "dr. Khal Drogo, Sp PD FINASIM"},
    {value:"dr. Ramsay Bolton, Sp AN", name: "dr. Ramsay Bolton, Sp AN"},
    {value:"dr. Viserys II S, Sp.KJ", name: "dr. Viserys II S, Sp.KJ"},
  ]

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
        Swal.fire({
          icon: 'success',
          title: 'Catatan Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/catatan-perkembangan-pasien-terintegrasi")
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
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Catatan Perkembangan Pasien Terintegrasi</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 gap-4">
      <div class="my-2">
        <Label>Profesional Pemberi Asuhan:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name=""/>
      </div>
      <div class="my-2">
        <Label>Hasil Asesmen Pasien & Pemberian Pelayanan:  <span class="text-sm text-red-500 italic">*</span></Label>
        <p class="text-sm space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">Tulis dengan format SOAP, disertai sasaran</p>
        <Textarea id="" placeholder="" name="" row="4"/>
      </div>
      <div class="my-2">
        <Label>Instruksi:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name=""/>
      </div>
      <div class="my-2">
        <Label>Verifikasi DPJP:  <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={dpjp}/>
        </Label>
      </div>
    </div>
  </form>
</main>