<script>
  import { page } from '$app/stores';
  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Radio, Select, Textarea } from 'flowbite-svelte';
 
  const no_rm = $page.params.slug;
  
  let jenisRuangan = [
    {value:"Kelas VVIP", name: "Kelas VVIP"},
    {value:"Kelas VIP", name: "Kelas VIP"},
    {value:"Kelas 1", name: "Kelas 1"},
    {value:"Kelas 2", name: "Kelas 2"},
    {value:"Kelas 3", name: "Kelas 3"},
    {value:"Kelas Khusus Anak", name: "Kelas Khusus Anak"},
    {value:"Kelas Obstetri", name: "Kelas Obstetri"},
  ]
  
  let namaRuangan = [
    {value:"Kamar Wisnu", name: "Kamar Wisnu"},
    {value:"Kamar Amarta", name: "Kamar Amarta"},
    {value:"Kamar Rama", name: "Kamar Rama"},
  ]

  const handleSubmit = () => {
    console.log("submitted")
  }
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/pendaftaran">Pendaftaran Pasien</BreadcrumbItem>
    <BreadcrumbItem>Pendaftaran Rawat Inap</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <form on:submit={handleSubmit}>
      <div class="flex items-center justify-between py-5">
        <p class="font-semibold text-2xl">Formulir Pendaftaran Rawat Inap</p>
        <p class="p-4 border border-gray-300 font-normal text-md">No. Rekam Medis: <span class="font-semibold">{no_rm}</span></p>
      </div>
      <hr>
      <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-2">
        <div class="group mb-4">
          <Label for="nama_lengkap" class="mb-2">Nama Lengkap:</Label>
          <Input name="nama_lengkap" id="nama_lengkap" readonly value="Jon Snow" />
        </div>
        <div class="group mb-4">
          <Label for="umur" class="mb-2">Umur:</Label>
          <Input name="umur" id="umur" readonly value="18" />
        </div>
        <div class="group mb-4">
          <Label for="jenis_kelamin" class="mb-2">Jenis Kelamin:</Label>
          <Input name="jenis_kelamin" id="jenis_kelamin" readonly value="Laki-Laki" />
        </div>
      </div>
      <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div class="group mb-4">
            <Label for='' class='block mb-2'>Masuk Melalui:</Label>
            <div class="flex gap-2">
              <Radio name="masuk_melalui" value="IGD">IGD</Radio>
              <Radio name="masuk_melalui" value="Rujukan">Rujukan</Radio>
              <Radio name="masuk_melalui" value="Poliklinik Spesialis">Poliklinik Spesialis</Radio>
            </div>
          </div>
          <div class="group mb-4">
            <Label for="diagnosa_sementara" class="mb-2">Diagnosa Sementara:</Label>
            <Textarea id="diagnosa_sementarad" placeholder="Masukkan diagnosa sementara" rows="2" name="diagnosa_sementara"/>
          </div>
        </div>
        <div>
          <div class="group mb-4">
            <Label>Pilih Jenis Ruangan<Select class="mt-2" name="jenis_kamar" items={jenisRuangan}/></Label>
          </div>
          <div class="group mb-4">
            <Label>Pilih Nama Ruangan<Select class="mt-2" name="nama_kamar" items={namaRuangan}/></Label>
          </div>
        </div>
      </div>
      <div class="text-right">
        <Button type="submit" color="green">Simpan</Button>
      </div>
    </form>
  </section>
</div>