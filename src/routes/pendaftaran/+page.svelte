<script>

  import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Input, Label, Radio, Search, Select, Textarea} from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import CariPasien from "./CariPasien.svelte";

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
  
  let viewFormAsuransi = null
	const onChange = (e) => {
		viewFormAsuransi = e.target.value
	}

  let detailPesertaBPJS = ``
  const searchBPJS = () => {
    detailPesertaBPJS = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div class="group mb-4">
          <label for='nama_asuransi' class='text-sm font-medium block text-gray-900 dark:text-gray-300 block mb-2'>Nama Asuransi:</label>
          <input class='block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg' type="text" id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan nama asuransi" value="BPJS" readonly/>
        </div>
        <div class="group mb-4">
          <label for='no_asuransi_peserta' class='text-sm font-medium block text-gray-900 dark:text-gray-300 block mb-2'>Nomor Asuransi Peserta:</label>
          <input class='block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg' type="text" id="no_asuransi_peserta" name="no_asuransi_peserta" value="215150290111014" placeholder="Masukkan nomor asuransi peserta" readonly/>
        </div>
      </div>`
  };

  let resultSearchPasien = []

  const handleSubmitPendaftaranPasienBaru = () => {
    goto("/pendaftaran/000001-2023")
  }
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pendaftaran Pasien</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-">
        <p class="text-lg font-semibold">Formulir Pasien Rawat Inap</p>
        <CariPasien bind:resultSearchPasien={resultSearchPasien}/>
      </div>
      <form on:submit|preventDefault={handleSubmitPendaftaranPasienBaru}>
        <hr class="my-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="px-2 lg:border-r border-gray-300">
            <div class="group mb-4">
              <Label for='no_rekam_medis' class='block mb-2'>Nomor Rekam Medis:</Label>
              <Input id="no_rekam_medis" name="no_rekam_medis" placeholder="Masukkan nomor rekam medis pasien" bind:value={resultSearchPasien['no_rm']}/>
            </div>
            <div class="group mb-4">
              <Label for='nama_lengkap' class='block mb-2'>Nama Lengkap Pasien:</Label>
              <Input id="nama_lengkap" name="nama_lengkap" placeholder="Masukkan nama lengkap pasien" bind:value={resultSearchPasien['nama_pasien']}/>
            </div>
            <div class="group mb-4">
              <Label for='umur' class='block mb-2'>Umur:</Label>
              <Input id="umur" name="umur" placeholder="Masukkan umur pasien"/>
            </div>
            <div class="group mb-4">
              <Label for='' class='block mb-2'>Jenis Kelamin:</Label>
              <div class="flex gap-2">
                <Radio name="jenis_kelamin" value="Laki-Laki">Laki-Laki</Radio>
                <Radio name="jenis_kelamin" value="Perempuan">Perempuan</Radio>
              </div>
            </div>
            <div class="group mb-4">
              <Label for='' class='block mb-2'>Tempat / Tanggal Lahir:</Label>
              <div class="flex gap-2">
                <Input id="tempat_lahir" name="tempat_lahir" placeholder="Masukkan tempat"/>
                <Input id="tanggal_lahir" name="tanggal_lahir" type="date"/>
              </div>
            </div>
            <div class="group mb-4">
              <Label for='no_telp_pasien' class='block mb-2'>Nomor Telepon/HP:</Label>
              <Input id="no_telp_pasien" name="no_telp_pasien" placeholder="Masukkan nomor telepon / HP pasien"/>
            </div>
            <div class="group mb-4">
              <Label>Agama
                <Select name="agama" class="mt-2" items={agamaPasien}/>
              </Label>
            </div>
            <div class="group mb-4">
              <Label for='alamat_tempat_tinggal' class='block mb-2'>Alamat Tempat Tinggal:</Label>
              <Textarea name="alamat_tempat_tinggal" id="alamat_tempat_tinggal" placeholder="Masukkan alamat tempat tinggal pasien" rows="1" />
            </div>
            <div class="group mb-4">
              <Label for='alamat_ktp' class='block mb-2'>Alamat KTP:</Label>
              <Textarea name="alamat_ktp" id="alamat_ktp" placeholder="Masukkan alamat sesuai ktp pasien" rows="1" bind:value={resultSearchPasien['alamat_ktp']}/>
            </div>
          </div>
          <div class="px-2">
            <div class="group mb-4">
              <Label for='nama_pj' class='block mb-2'>Penanggung Jawab:</Label>
              <Input id="nama_pj" name="nama_pj" placeholder="Masukkan nama penanggung jawab pasien"/>
            </div>
            <div class="group mb-4">
              <Label for='' class='block mb-2'>Hubungan dengan Pasien:</Label>
              <div class="flex flex-wrap gap-2">
                <Radio name="hubungan_pasien_pj" value="Orang Tua">Orang Tua</Radio>
                <Radio name="hubungan_pasien_pj" value="Anak">Anak</Radio>
                <Radio name="hubungan_pasien_pj" value="Suami/Istri">Suami/Istri</Radio>
                <Radio name="hubungan_pasien_pj" value="Keluarga">Keluarga</Radio>
                <Radio name="hubungan_pasien_pj" value="Teman">Teman</Radio>
                <Radio name="hubungan_pasien_pj" value="Lain-Lain">Lain-Lain</Radio>
              </div>
            </div>
            <div class="group mb-4">
              <Label for='alamat_tempat_tinggal_pj' class='block mb-2'>Alamat Tempat Tinggal:</Label>
              <Textarea name="alamat_tempat_tinggal_pj" id="alamat_tempat_tinggal_pj" placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien" rows="2"/>
            </div>
            <div class="group mb-4">
              <Label for='alamat_ktp_pj' class='block mb-2'>Alamat KTP:</Label>
              <Textarea name="alamat_ktp_pj" id="alamat_ktp_pj" placeholder="Masukkan alamat sesuai ktp penanggung jawab pasien" rows="2"/>
            </div>
            <div class="group mb-4">
              <Label for='no_telp_pj' class='block mb-2'>Nomor Telepon/HP:</Label>
              <Input id="no_telp_pj" name="no_telp_pj" placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"/>
            </div>
          </div>
          <div class="px-2 lg:border-l border-gray-300">
            <div class="w-64">
              <Label for="tipePasien">Tipe Asuransi Pasien:</Label>
              <Select on:change={onChange} id="tipePasien" size="md" items={pasienTipeStatus} class="mt-2 mb-6"/>
            </div>
            {#if viewFormAsuransi === "umum"}
              <div class="group mb-4">
                <Label for='' class='block mb-2'>Cara Pembayaran:</Label>
                <div class="flex flex-wrap gap-2">
                  <Checkbox name="cara_pembayaran[]" value="umum/mandiri" checked="true">Umum/Mandiri</Checkbox>
                  <Checkbox name="cara_pembayaran[]" disabled>BPJS</Checkbox>
                  <Checkbox name="cara_pembayaran[]" disabled>Asuransi Lainnya</Checkbox>
                </div>
              </div>
            {:else if viewFormAsuransi === "bpjs"}
              <div class="group mb-4">
                <Label for='' class='block mb-2'>Cara Pembayaran:</Label>
                <div class="flex flex-wrap gap-2">
                  <Checkbox name="cara_pembayaran[]" disabled>Umum/Mandiri</Checkbox>
                  <Checkbox name="cara_pembayaran[]" value="bpjs" checked>BPJS</Checkbox>
                  <Checkbox name="cara_pembayaran[]" disabled>Asuransi Lainnya</Checkbox>
                </div>
              </div>
              <div class="group mb-4">
                <form class="flex gap-2" on:submit|preventDefault={searchBPJS}>
                  <Search size="md" placeholder="Masukkan Nomor Registrasi Peserta" />
                  <Button class="!p-2.5">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  </Button>
                </form>
              </div>
              <div class="group mb-4" contenteditable="true" bind:innerHTML={detailPesertaBPJS}></div>
            {:else if viewFormAsuransi === "lainnya"}
              <div class="group mb-4">
                <Label for='' class='block mb-2'>Cara Pembayaran:</Label>
                <div class="flex flex-wrap gap-2">
                  <Checkbox name="cara_pembayaran[]" disabled>Umum/Mandiri</Checkbox>
                  <Checkbox name="cara_pembayaran[]" disabled>BPJS</Checkbox>
                  <Checkbox name="cara_pembayaran[]" value="lainnya" checked>Asuransi Lainnya</Checkbox>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div class="group mb-4">
                  <Label for='nama_asuransi' class='block mb-2'>Nama Asuransi:</Label>
                  <Input id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan nama asuransi"/>
                </div>
                <div class="group mb-4">
                  <Label for='no_asuransi_peserta' class='block mb-2'>Nomor Asuransi Peserta:</Label>
                  <Input id="no_asuransi_peserta" name="no_asuransi_peserta" placeholder="Masukkan nomor asuransi peserta"/>
                </div>
              </div>
            {:else}
              <p class="font-semibold text-md">
                Silahkan pilih tipe asuransi pasien terlebih dahulu untuk melakukan update.
              </p>
            {/if}
          </div>
        </div>
        <br>
        <div class="text-right">
          <Button type="submit" color="green">Daftar Rawat Inap</Button>
        </div>
      </form>
    </div>
  </section>
</div>