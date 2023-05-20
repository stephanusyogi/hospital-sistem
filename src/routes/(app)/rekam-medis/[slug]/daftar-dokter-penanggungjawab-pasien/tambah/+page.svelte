<script>

  import { Button, Checkbox, Input, Label, Select, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';

  let dpjp = [
    {value:"dr. Khal Drogo, Sp PD FINASIM", name: "dr. Khal Drogo, Sp PD FINASIM"},
    {value:"dr. Ramsay Bolton, Sp AN", name: "dr. Ramsay Bolton, Sp AN"},
    {value:"dr. Viserys II S, Sp.KJ", name: "dr. Viserys II S, Sp.KJ"},
  ]
  
  let status = [
    {value:"dpjp_utama", name: "DPJP Utama"},
    {value:"dpjp", name: "DPJP"},
  ]
  
  const handleSubmit = () => {
    Swal.fire({
      title: 'Ajukan Permintaan Dokter?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Ajukan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Dokter Berhasil Diajukan, Mohon Tunggu Kesediaan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/daftar-dokter-penanggungjawab-pasien")
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
        <p class="text-xl font-semibold">Formulir Permintaan Kesediaan DPJP</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green">
          Ajukan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="my-2">
      <Label>Nama DPJP:  <span class="text-sm text-red-500 italic">*</span>
        <Select class="mt-2" items={dpjp}/>
      </Label>
    </div>
    <div class="my-2">
      <Label for="" class="mb-2">Keterangan: <span class="text-sm text-red-500 italic">*</span></Label>
      <Textarea id="" placeholder="Masukkan Keterangan" rows="2" name="keterangan"/>
    </div>
    <div class="my-2">
      <Checkbox>Permintaan Pribadi Pasien Rawat Inap</Checkbox>
    </div>
  </form>
</main>