<script>
  import { page } from '$app/stores';
  import { Button, Input, Label, Radio, Search, Select, Textarea } from 'flowbite-svelte';
  import { goto } from '$app/navigation';
  import Swal from 'sweetalert2';

  const no_rm = $page.params.slug;
  
  let agamaPasien = [
    {value:"Islam", name: "Islam"},
    {value:"Katolik", name: "Katolik"},
    {value:"Protestan", name: "Protestan"},
    {value:"Hindu", name: "Hindu"},
    {value:"Buddha", name: "Buddha"},
    {value:"Lain-Lain", name: "Lain-Lain"},
  ]
  
  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Informasi Pasien?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Informasi Pasien Berhasil Disimpan & Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto(`/rekam-medis/${no_rm}/informasi-pasien`)
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

<main>
  <form on:submit|preventDefault={()=>handleSubmit(no_rm)}>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Informasi Pasien</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <div class="overflow-y-auto max-h-screen">
      <div class="border border-slate-300 rounded p-4 w-full">
        <p class="text-xl font-semibold">Biodata Pasien</p>
        <hr class="my-2">
        <div class="mb-2">
          <p class="text-lg font-medium italic">Identitas</p>
          <div class="grid grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label for='no_rekam_medis' class='block mb-2'>Nomor Rekam Medis: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="no_rekam_medis" name="no_rekam_medis" placeholder="Masukkan nomor rekam medis pasien"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='nama_lengkap' class='block mb-2'>Nama Lengkap Pasien: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="nama_lengkap" name="nama_lengkap" placeholder="Masukkan nama lengkap pasien"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='umur' class='block mb-2'>Umur: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="umur" name="umur" placeholder="Masukkan umur pasien"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='' class='block mb-2'>Jenis Kelamin: <span class="text-red-500 text-lg">*</span></Label>
              <div class="flex gap-2">
                <Radio name="jenis_kelamin" value="Laki-Laki">Laki-Laki</Radio>
                <Radio name="jenis_kelamin" value="Perempuan">Perempuan</Radio>
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for='' class='block mb-2'>Tempat / Tanggal Lahir: <span class="text-red-500 text-lg">*</span></Label>
              <div class="flex gap-2">
                <Input id="tempat_lahir" name="tempat_lahir" placeholder="Masukkan tempat"/>
                <Input id="tanggal_lahir" name="tanggal_lahir" type="date"/>
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for='no_telp_pasien' class='block mb-2'>Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="no_telp_pasien" name="no_telp_pasien" placeholder="Masukkan nomor telepon / HP pasien"/>
            </div>
            <div class="grouphelperPagination">
              <Label>Agama:  <span class="text-red-500 text-lg">*</span>
                <Select name="agama" class="mt-2" items={agamaPasien}/>
              </Label>
            </div>
            <div class="grouphelperPagination">
              <Label for='alamat_tempat_tinggal' class='block mb-2'>Alamat Tempat Tinggal: <span class="text-red-500 text-lg">*</span></Label>
              <Textarea name="alamat_tempat_tinggal" id="alamat_tempat_tinggal" placeholder="Masukkan alamat tempat tinggal pasien" rows="1" />
            </div>
            <div class="grouphelperPagination">
              <Label for='alamat_ktp' class='block mb-2'>Alamat KTP: <span class="text-red-500 text-lg">*</span></Label>
              <Textarea name="alamat_ktp" id="alamat_ktp" placeholder="Masukkan alamat sesuai ktp pasien" rows="1"/>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-medium italic">Identitas Penanggung Jawab</p>
          <div class="grid grid-cols-2 gap-4 py-2 mb-2 border-b">
            <div class="grouphelperPagination">
              <Label for='nama_pj' class='block mb-2'>Penanggung Jawab: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="nama_pj" name="nama_pj" placeholder="Masukkan nama penanggung jawab pasien"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='' class='block mb-2'>Hubungan dengan Pasien: <span class="text-red-500 text-lg">*</span></Label>
              <div class="flex flex-wrap gap-2">
                <Radio name="hubungan_pasien_pj" value="Orang Tua">Orang Tua</Radio>
                <Radio name="hubungan_pasien_pj" value="Anak">Anak</Radio>
                <Radio name="hubungan_pasien_pj" value="Suami/Istri">Suami/Istri</Radio>
                <Radio name="hubungan_pasien_pj" value="Keluarga">Keluarga</Radio>
                <Radio name="hubungan_pasien_pj" value="Teman">Teman</Radio>
                <Radio name="hubungan_pasien_pj" value="Lain-Lain">Lain-Lain</Radio>
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for='alamat_tempat_tinggal_pj' class='block mb-2'>Alamat Tempat Tinggal: <span class="text-red-500 text-lg">*</span></Label>
              <Textarea name="alamat_tempat_tinggal_pj" id="alamat_tempat_tinggal_pj" placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien" rows="2"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='alamat_ktp_pj' class='block mb-2'>Alamat KTP: <span class="text-red-500 text-lg">*</span></Label>
              <Textarea name="alamat_ktp_pj" id="alamat_ktp_pj" placeholder="Masukkan alamat sesuai ktp penanggung jawab pasien" rows="2"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='no_telp_pj' class='block mb-2'>Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="no_telp_pj" name="no_telp_pj" placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"/>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-medium italic">Asuransi & Pembayaran</p>
          <div class="grid grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label for='asuransi' class='block mb-2'>Asuransi: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="asuransi" name="asuransi" placeholder="Masukkan Asuransi"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='nama_asuransi' class='block mb-2'>Nama Asuransi: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan Nama Asuransi"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='no_asuransi' class='block mb-2'>No Asuransi: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="no_asuransi" name="no_asuransi" placeholder="Masukkan Nomor Asuransi"/>
            </div>
            <div class="grouphelperPagination">
              <Label for='status_asuransi' class='block mb-2'>Status Asuransi: <span class="text-red-500 text-lg">*</span></Label>
              <Input id="status_asuransi" name="status_asuransi" placeholder="Masukkan Status Asuransi"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>