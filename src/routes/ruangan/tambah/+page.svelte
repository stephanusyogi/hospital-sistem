<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Select } from "flowbite-svelte";

  let jenisRuangan = [
    {value:"Kelas VVIP", name: "Kelas VVIP"},
    {value:"Kelas VIP", name: "Kelas VIP"},
    {value:"Kelas 1", name: "Kelas 1"},
    {value:"Kelas 2", name: "Kelas 2"},
    {value:"Kelas 3", name: "Kelas 3"},
    {value:"Kelas Khusus Anak", name: "Kelas Khusus Anak"},
    {value:"Kelas Obstetri", name: "Kelas Obstetri"},
  ]
  
  const handleSubmit = () => {
    console.log("test")
  }
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/ruangan">Data Ruangan</BreadcrumbItem>
    <BreadcrumbItem>Tambah Ruangan Baru</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Formulir Ruangan Baru</p>
    </div>
    <hr class="my-5">
    <form on:submit={handleSubmit}>
      <div class="group mb-4">
        <Label for='nama' class='block mb-2'>Nama Ruangan:</Label>
        <Input id="nama" name="nama" placeholder="Masukkan nama ruangan"/>
      </div>
      <div class="group mb-4">
        <Label>Jenis
          <Select name="jenis" class="mt-2" items={jenisRuangan}/>
        </Label>
      </div>
      <div class="group mb-4">
        <Label for='harga' class='block mb-2'>Harga:</Label>
        <Input type="number" id="harga" name="harga" placeholder="Masukkan harga ruangan"/>
      </div>
      <div class="group mb-4">
        <Label for='kuota' class='block mb-2'>Kuota:</Label>
        <Input type="number" id="kuota" name="kuota" placeholder="Masukkan kuota ruangan"/>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>
