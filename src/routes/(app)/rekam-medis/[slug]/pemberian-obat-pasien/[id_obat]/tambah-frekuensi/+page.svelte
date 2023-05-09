<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button, Label, Radio, Select, Textarea } from "flowbite-svelte";

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Frekuensi Obat Pasien?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Frekuensi Obat Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/pemberian-obat-pasien/OBT198241")
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
        <p class="text-xl font-semibold">Pemberian Obat Pasien</p>
        <p class="text-lg font-semibold italic">Frekuensi Obat</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green">
          Tambahkan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-2 gap-4">
      <div class="my-2 col-span-2">
        <div class="grid grid-cols-2 gap-6">
          <Label class="space-y-2">
            <span>Farmasi</span>
            <Textarea id="" name=""/>
          </Label>
          <Label class="space-y-2">
            <span>Perawat</span>
            <Textarea id="" name=""/>
          </Label>
          <Label class="space-y-2">
            <span>Pasien</span>
            <Textarea id="" name=""/>
          </Label>
          <Label class="space-y-2">
            <span>ROTD (Reaksi Obat yang Tidak Diharapkan)</span>
            <Radio name="rotd">Ada</Radio>
            <Radio name="rotd">Tidak Ada</Radio>
          </Label>
          <Label class="space-y-2 col-span-2">
            <span>Catatan</span>
            <Textarea id="" name=""/>
          </Label>
        </div>
      </div>
    </div>
  </form>
</main>