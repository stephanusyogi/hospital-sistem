<script>

  import { Breadcrumb, BreadcrumbItem, Button, Input, Label, Radio, Select, Textarea } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";

  let agamaPasien = [
    {value:"Islam", name: "Islam"},
    {value:"Katolik", name: "Katolik"},
    {value:"Protestan", name: "Protestan"},
    {value:"Hindu", name: "Hindu"},
    {value:"Buddha", name: "Buddha"},
    {value:"Lain-Lain", name: "Lain-Lain"},
  ]
  
  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Pasien?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Pasien Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/pendaftaran/loket-pasien")
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
    <BreadcrumbItem>Pendaftaran</BreadcrumbItem>
    <BreadcrumbItem>Loket Pasien</BreadcrumbItem>
    <BreadcrumbItem>Tambah Pasien Baru</BreadcrumbItem>
  </Breadcrumb>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-lg font-semibold">Formulir Pasien Baru RSI Aisyah</p>
        <p class="text-red-500 text-sm mt-5">(*) Wajib diisi.</p>
      </div>
      <Button color="green" type="submit">Tambahkan Pasien</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-4 gap-4 mt-5">
      <div class="group ">
        <Label for='no_rekam_medis' class='block mb-2'>Nomor Rekam Medis: <span class="text-red-500 text-lg">*</span></Label>
        <Input id="no_rekam_medis" name="no_rekam_medis" placeholder="Masukkan nomor rekam medis pasien"/>
      </div>
      <div class="group ">
        <Label for='nama_lengkap' class='block mb-2'>Nama Lengkap Pasien: <span class="text-red-500 text-lg">*</span></Label>
        <Input id="nama_lengkap" name="nama_lengkap" placeholder="Masukkan nama lengkap pasien" />
      </div>
      <div class="group ">
        <Label for='nik' class='block mb-2'>NIK Pasien: <span class="text-red-500 text-lg">*</span></Label>
        <Input id="nik" name="nik" placeholder="Masukkan NIK pasien"/>
      </div>
      <div class="group ">
        <Label for='umur' class='block mb-2'>Umur: <span class="text-red-500 text-lg">*</span></Label>
        <Input id="umur" name="umur" placeholder="Masukkan umur pasien"/>
      </div>
      <div class="group ">
        <Label for='' class='block mb-2'>Jenis Kelamin: <span class="text-red-500 text-lg">*</span></Label>
        <div>
          <Radio class="mb-2" name="jenis_kelamin" value="Laki-Laki">Laki-Laki</Radio>
          <Radio name="jenis_kelamin" value="Perempuan">Perempuan</Radio>
        </div>
      </div>
      <div class="group ">
        <Label for='' class='block mb-2'>Tempat / Tanggal Lahir: <span class="text-red-500 text-lg">*</span></Label>
        <div class="flex gap-2">
          <Input id="tempat_lahir" name="tempat_lahir" placeholder="Masukkan tempat" defaultClass="block w-40 disabled:cursor-not-allowed disabled:opacity-50"/>
          <Input id="tanggal_lahir" name="tanggal_lahir" type="date" defaultClass="block w-80 disabled:cursor-not-allowed disabled:opacity-50"/>
        </div>
      </div>
      <div class="group ">
        <Label for='no_telp_pasien' class='block mb-2'>Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span></Label>
        <Input id="no_telp_pasien" name="no_telp_pasien" placeholder="Masukkan nomor telepon / HP pasien"/>
      </div>
      <div class="group ">
        <Label>Agama: <span class="text-red-500 text-lg">*</span>
          <Select name="agama" class="mt-2" items={agamaPasien}/>
         </Label>
      </div>
      <div class="group ">
        <Label for='alamat_tempat_tinggal' class='block mb-2'>Alamat Tempat Tinggal: <span class="text-red-500 text-lg">*</span></Label>
        <Textarea name="alamat_tempat_tinggal" id="alamat_tempat_tinggal" placeholder="Masukkan alamat tempat tinggal pasien" rows="1" />
      </div>
      <div class="group ">
        <Label for='alamat_ktp' class='block mb-2'>Alamat KTP: <span class="text-red-500 text-lg">*</span></Label>
        <Textarea name="alamat_ktp" id="alamat_ktp" placeholder="Masukkan alamat sesuai ktp pasien" rows="1"/>
      </div>
    </div>
  </form>
</div>