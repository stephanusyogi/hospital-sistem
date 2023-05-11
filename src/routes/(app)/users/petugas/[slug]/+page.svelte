<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Select } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";

  let role = [
    {value:"Perawat", name: "Perawat"},
    {value:"Farmasi", name: "Farmasi"},
  ]
  const handleSubmit = () => {
    Swal.fire({
      title: 'Update Petugas?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Petugas Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/users/petugas")
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
    <BreadcrumbItem href="/users/petugas">Petugas</BreadcrumbItem>
    <BreadcrumbItem>Uodate Petugas</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Update Informasi Petugas</p>
    </div>
    <hr class="my-5">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="group mb-4">
        <Label for='nama' class='block mb-2'>Nama Petugas:</Label>
        <Input id="nama" name="nama" placeholder="Masukkan nama petugas"/>
      </div>
      <div class="group mb-4">
        <Label>Role
          <Select name="role" class="mt-2" items={role}/>
        </Label>
      </div>
      <div class="group mb-4">
        <Label for='username' class='block mb-2'>Username Akun:</Label>
        <Input id="username" name="username" placeholder="Masukkan username akun petugas"/>
      </div>
      <div class="group mb-4">
        <Label for='password' class='block mb-2'>Password Akun:</Label>
        <Input id="password" name="password" type="password" placeholder="Isi apabila ingin mengubah password"/>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
