<script>
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Input,
    Label,
    Select,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";


  const handleSubmit = () => {
    Swal.fire({
      title: "Tambahkan Dokter?",
      text: "Mohon berhati-hati, aksi ini bersifat permanen pada database.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Tambah",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    });
  };
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto"  aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Dokter</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Formulir Dokter Baru</p>
    </div>
    <hr class="my-5" />
    <form id="form" on:submit|preventDefault={handleSubmit} method="post">
      <div class="group mb-4">
        <Label for="name" class="block mb-2">Nama Dokter:</Label>
        <Input id="name" name="name" placeholder="Masukkan nama dokter" required/>
      </div>
      <div class="group mb-4">
        <Label for="spesialis">Spesialisasi</Label>
        <Input id="spesialis" name="spesialis" placeholder="Masukkan spesialis dokter" required/>
      </div>
      <div class="group mb-4">
        <Label for="email" class="block mb-2">Email Akun:</Label>
        <Input
          required
          id="email"
          name="email"
          placeholder="Masukkan email akun dokter"
        />
      </div>
      <div class="group mb-4">
        <Label for="password" class="block mb-2">Password Akun:</Label>
        <Input
          required
          id="password"
          name="password"
          type="password"
          placeholder="Masukkan password akun dokter"
        />
        <Input
          type="hidden"
          id="password"
          name="role"
          value="Dokter"
        />
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
