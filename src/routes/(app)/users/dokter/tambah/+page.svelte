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

  let spesialis = [
    { value: "Spesialis Penyakit Dalam", name: "Spesialis Penyakit Dal" },
    { value: "Spesialis Anak", name: "Spesialis Anak" },
    { value: "Spesialis Saraf", name: "Spesialis Saraf" },
    {
      value: "Spesialis Kandungan & Ginekologi",
      name: "Spesialis Kandungan & Ginekologi",
    },
    { value: "Spesialis Bedah", name: "Spesialis Bedah" },
    { value: "Spesialis Kulit & Kelamin", name: "Spesialis Kulit & Kelamin" },
    { value: "Spesialis THT", name: "Spesialis THT" },
  ];

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
        Swal.fire({
          icon: "success",
          title: "Dokter Berhasil Ditambahkan",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          goto("/users/dokter");
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Aksi Dibatalkan",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem href="/" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/users/dokter">Dokter</BreadcrumbItem>
    <BreadcrumbItem>Tambah Dokter Baru</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Formulir Dokter Baru</p>
    </div>
    <hr class="my-5" />
    <form on:submit|preventDefault={handleSubmit}>
      <div class="group mb-4">
        <Label for="nama" class="block mb-2">Nama Dokter:</Label>
        <Input id="nama" name="nama" placeholder="Masukkan nama dokter" />
      </div>
      <div class="group mb-4">
        <Label
          >Spesialisasi
          <Select name="spesialis" class="mt-2" items={spesialis} />
        </Label>
      </div>
      <div class="group mb-4">
        <Label for="username" class="block mb-2">Username Akun:</Label>
        <Input
          id="username"
          name="username"
          placeholder="Masukkan username akun dokter"
        />
      </div>
      <div class="group mb-4">
        <Label for="password" class="block mb-2">Password Akun:</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Masukkan password akun dokter"
        />
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
