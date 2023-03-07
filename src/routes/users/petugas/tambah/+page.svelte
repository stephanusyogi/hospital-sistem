<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label } from "flowbite-svelte";
  
  const handleSubmit = () => {
    console.log("test")
  }
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/users/petugas">Petugas</BreadcrumbItem>
    <BreadcrumbItem>Tambah Petugas Baru</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Formulir Petugas Baru</p>
    </div>
    <hr class="my-5">
    <form on:submit={handleSubmit}>
      <div class="group mb-4">
        <Label for='nama' class='block mb-2'>Nama Petugas:</Label>
        <Input id="nama" name="nama" placeholder="Masukkan nama petugas"/>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
