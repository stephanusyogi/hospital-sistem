<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button, Label, Select, Textarea } from "flowbite-svelte";

  let dpjp = [
    {value:"dr. Khal Drogo, Sp PD FINASIM", name: "dr. Khal Drogo, Sp PD FINASIM"},
    {value:"dr. Ramsay Bolton, Sp AN", name: "dr. Ramsay Bolton, Sp AN"},
    {value:"dr. Viserys II S, Sp.KJ", name: "dr. Viserys II S, Sp.KJ"},
  ]

  let obat = [
    {value:"Artesunate tablet", name: "Artesunate tablet"},
    {value:"Amodiaquine anhydrida tablet", name: "Amodiaquine anhydrida tablet"},
    {value:"Albendazol", name: "Albendazol"},
  ]

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
        Swal.fire({
          icon: 'success',
          title: 'Obat Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/pemberian-obat-pasien")
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
        <p class="text-xl font-semibold">Form 12.37 Pemberian Obat Pasien</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green">
          Tambahkan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-2 gap-4">
      <div class="my-2">
        <Label>DPJP:  <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={dpjp}/>
        </Label>
      </div>
      <div class="my-2">
        <Label>Obat:  <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" items={obat}/>
        </Label>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Dosis Obat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" rows="2" name=""/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Rute Obat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" rows="2" name=""/>
      </div>
    </div>
  </form>
</main>