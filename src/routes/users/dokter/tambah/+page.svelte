<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Select } from "flowbite-svelte";

  let spesialis = [
    {value:"Spesialis Penyakit Dalam", name: "Spesialis Penyakit Dal"},
    {value:"Spesialis Anak", name: "Spesialis Anak"},
    {value:"Spesialis Saraf", name: "Spesialis Saraf"},
    {value:"Spesialis Kandungan & Ginekologi", name: "Spesialis Kandungan & Ginekologi"},
    {value:"Spesialis Bedah", name: "Spesialis Bedah"},
    {value:"Spesialis Kulit & Kelamin", name: "Spesialis Kulit & Kelamin"},
    {value:"Spesialis THT", name: "Spesialis THT"},
  ]
  
  const handleSubmit = () => {
    console.log("test")
  }
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/users/dokter">Dokter</BreadcrumbItem>
    <BreadcrumbItem>Tambah Dokter Baru</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Formulir Dokter Baru</p>
    </div>
    <hr class="my-5">
    <form on:submit={handleSubmit}>
      <div class="group mb-4">
        <Label for='nama' class='block mb-2'>Nama Dokter:</Label>
        <Input id="nama" name="nama" placeholder="Masukkan nama dokter"/>
      </div>
      <div class="group mb-4">
        <Label>Jenis
          <Select name="spesialis" class="mt-2" items={spesialis}/>
        </Label>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
