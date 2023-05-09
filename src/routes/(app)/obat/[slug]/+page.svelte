<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Select } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";
  
  const handleSubmit = () => {
    Swal.fire({
      title: 'Update Obat/Bahan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Obat/Bahan Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/obat")
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

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/ruangan">Data Obat & Bahan Habis Pakai</BreadcrumbItem>
    <BreadcrumbItem>Update</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Update Informasi Obat/Bahan Habis Pakai</p>
    </div>
    <hr class="my-5">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="group mb-4">
        <Label for='nama' class='block mb-2'>Nama Barang:</Label>
        <Input id="nama" name="nama" placeholder="Masukkan nama obat"/>
      </div>
      <div class="group mb-4">
        <Label for='harga' class='block mb-2'>Harga:</Label>
        <Input type="number" id="harga" name="harga" placeholder="Masukkan harga obat"/>
      </div>
      <div class="group mb-4">
        <Label for='stok' class='block mb-2'>Stok:</Label>
        <Input type="number" id="stok" name="stok" placeholder="Masukkan stok obat"/>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
