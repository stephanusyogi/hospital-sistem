<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Select } from "flowbite-svelte";
  import Swal from "sweetalert2";

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Ruangan?',
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

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Data Ruangan</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Formulir Ruangan Baru</p>
    </div>
    <hr class="my-5">
    <form id="form" on:submit|preventDefault={handleSubmit} method="post">
      <div class="group mb-4">
        <Label for='nama_ruangan' class='block mb-2'>Nama Ruangan:</Label>
        <Input id="nama_ruangan" name="nama_ruangan" placeholder="Masukkan nama ruangan" required/>
      </div>
      <div class="group mb-4">
        <Label for='kelas' class='block mb-2'>Kelas Ruangan:</Label>
        <Input id="kelas" name="kelas" placeholder="Masukkan kelas ruangan" required/>
      </div>
      <div class="group mb-4">
        <Label for='harga' class='block mb-2'>Harga:</Label>
        <Input type="number" id="harga" name="harga" placeholder="Masukkan harga ruangan" required/>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
