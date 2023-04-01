<script>
  import { onMount, tick } from 'svelte';
  import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Input, Label, Radio, Search, Select, Textarea} from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";
  import JsBarcode from 'jsbarcode';

  let pasienTipeStatus = [
    {value:"umum", name: "UMUM"},
    {value:"bpjs", name: "BPJS"},
    {value:"lainnya", name: "Lainnya"},
  ]
  let agamaPasien = [
    {value:"Islam", name: "Islam"},
    {value:"Katolik", name: "Katolik"},
    {value:"Protestan", name: "Protestan"},
    {value:"Hindu", name: "Hindu"},
    {value:"Buddha", name: "Buddha"},
    {value:"Lain-Lain", name: "Lain-Lain"},
  ]
  let statusPeserta = [
    {value:1, name: "Peserta Aktif"},
    {value:0, name: "Peserta Tidak Aktif"},
  ]
  
  let viewFormAsuransi = null
	const onChange = (e) => {
		viewFormAsuransi = e.target.value
	}

  let detailPesertaBPJS = ``
  const searchBPJS = () => {
    detailPesertaBPJS = `
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="grouphelperPagination">
          <label for='nama_asuransi' class='text-sm font-medium block text-gray-900 dark:text-gray-300 block mb-2'>Nama Asuransi:</label>
          <input class='block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg' type="text" id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan nama asuransi" value="BPJS" readonly/>
        </div>
        <div class="grouphelperPagination">
          <label for='no_asuransi_peserta' class='text-sm font-medium block text-gray-900 dark:text-gray-300 block mb-2'>Nomor Asuransi Peserta:</label>
          <input class='block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg' type="text" id="no_asuransi_peserta" name="no_asuransi_peserta" value="215150290111014" placeholder="Masukkan nomor asuransi peserta" readonly/>
        </div>
      </div>
      <div>
        <div class="grouphelperPagination">
          <label for='status_asuransi' class='text-sm font-medium block text-gray-900 dark:text-gray-300 block mb-2'>Status:</label>
          <input class='block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg' type="text" id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan nama asuransi" value="Peserta Aktif" readonly/>
        </div>
      </div>
    </div>
        `
  };

  const handleSubmitPendaftaranPasienBaru = () => {
    Swal.fire({
      title: 'Simpan & Perbarui Data Pasien?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Pasien Berhasil Disimpan & Diperbarui',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          goto("/pendaftaran/admisi-rawat-inap")
        })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  
  const handleKembali = () => {
    Swal.fire({
      title: 'Kembali ke Loket Pasien?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Kembali',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto("/pendaftaran/loket-pasien")
      }
    })
  }

  let barcode;
  const defaultOptions = {
    format: 'CODE128',
    height: 30,
    displayValue: false,
    background: '#ffffff',
    lineColor: '#000000',
  };
  onMount(async () => {
    await tick();
    JsBarcode(barcode, "1910391301", defaultOptions);
  });
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Loket Pasien</BreadcrumbItem>
    <BreadcrumbItem>Formulir Admisi Rawat Inap</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <form on:submit|preventDefault={handleSubmitPendaftaranPasienBaru}>
      <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-2xl font-semibold">Formulir Admisi Rawat Inap</p>
            <div class="flex gap-4 justify-between items-center my-5">
              <div>
                <Button on:click={handleKembali} color="yellow">Kembali</Button>
                <Button type="submit" color="green">Daftarkan Pasien ke Admisi</Button>
              </div>
            </div>
            <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
          </div>
          <div class="p-4 border border-gray-300 w-max">
            <div class="flex justify-between gap-6">
              <p class="font-bold text-xs">No. RM: 00013-12313</p>
              <p class="font-bold text-xs uppercase">Jon Snow <span>(L)</span></p>
            </div>
            <div class="flex justify-between gap-6">
              <p class="font-bold text-xs">Tgl. Lahir: 02/06/2000</p>
              <p class="font-bold text-xs">23th</p>
            </div>
            <p class="font-bold text-xs">Jln. Mayjend Pandjaitan No. 22 Malang</p>
            <canvas class="w-full" bind:this={barcode}></canvas>
          </div>
        </div>
        <hr class="my-4">
          <div class="mb-2 border-b">
            <p class="text-lg font-medium italic">Identitas Pasien</p>
            <div class="grid grid-cols-4 gap-4 py-2">
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
                <div class="flex flex-col gap-2">
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
          <div class="mb-2 border-b">
            <p class="text-lg font-medium italic">Identitas Penanggung Jawab</p>
            <div class="grid grid-cols-4 gap-4 py-2 mb-2 border-b">
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
          <div class="mb-2 border-b">
            <p class="text-lg font-medium italic">Asuransi & Pembayaran</p>
            <div class="grid grid-cols-4 gap-4 py-2">
              <div>
                <Label for="tipePasien">Tipe Asuransi Pasien: <span class="text-red-500 text-lg">*</span></Label>
                <Select on:change={onChange} id="tipePasien" size="md" items={pasienTipeStatus} class="mt-2 mb-2"/>
                <p>Silahkan pilih tipe asuransi pasien terlebih dahulu.</p>
              </div>
              {#if viewFormAsuransi === "umum"}
                <div class="grouphelperPagination">
                  <Label for='' class='block mb-2'>Cara Pembayaran: <span class="text-red-500 text-lg">*</span></Label>
                  <div>
                    <Checkbox name="cara_pembayaran[]" value="umum/mandiri" checked="true">Umum/Mandiri</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>BPJS</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>Asuransi Lainnya</Checkbox>
                  </div>
                </div>
              {:else if viewFormAsuransi === "bpjs"}
                <div class="grouphelperPagination">
                  <Label for='' class='block mb-2'>Cara Pembayaran: <span class="text-red-500 text-lg">*</span></Label>
                  <div class="flex flex-wrap gap-2">
                    <Checkbox name="cara_pembayaran[]" disabled>Umum/Mandiri</Checkbox>
                    <Checkbox name="cara_pembayaran[]" value="bpjs" checked>BPJS</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>Asuransi Lainnya</Checkbox>
                  </div>
                </div>
                <div class="grouphelperPagination col-span-2">
                  <form class="flex gap-2 mb-2" on:submit|preventDefault={searchBPJS}>
                    <Search size="md" placeholder="Masukkan Nomor Registrasi Peserta" />
                    <Button class="!p-2.5">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                    </Button>
                  </form>
                  <div class="grouphelperPagination" contenteditable="true" bind:innerHTML={detailPesertaBPJS}></div>
                </div>
              {:else if viewFormAsuransi === "lainnya"}
                <div class="grouphelperPagination">
                  <Label for='' class='block mb-2'>Cara Pembayaran: <span class="text-red-500 text-lg">*</span></Label>
                  <div class="">
                    <Checkbox name="cara_pembayaran[]" disabled>Umum/Mandiri</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>BPJS</Checkbox>
                    <Checkbox name="cara_pembayaran[]" value="lainnya" checked>Asuransi Lainnya</Checkbox>
                  </div>
                </div>
                <div class="col-span-2 grid grid-cols-2 gap-4">
                  <div class="grouphelperPagination">
                    <Label for='nama_asuransi' class='block mb-2'>Nama Asuransi: <span class="text-red-500 text-lg">*</span></Label>
                    <Input id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan nama asuransi"/>
                  </div>
                  <div class="grouphelperPagination">
                    <Label for='no_asuransi_peserta' class='block mb-2'>Nomor Asuransi Peserta: <span class="text-red-500 text-lg">*</span></Label>
                    <Input id="no_asuransi_peserta" name="no_asuransi_peserta" placeholder="Masukkan nomor asuransi peserta"/>
                  </div>
                  <div class="grouphelperPagination">
                    <Label>Status Peserta:  <span class="text-red-500 text-lg">*</span>
                      <Select name="status_peserta" class="mt-2" items={statusPeserta}/>
                    </Label>
                  </div>
                </div>
              {:else}
                <p></p>
              {/if}
            </div>
          </div>
      </div>
    </form>
  </section>
</div>