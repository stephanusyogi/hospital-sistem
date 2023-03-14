<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, Search, Select, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";

  let agamaPasien = [
    {value:"Islam", name: "Islam"},
    {value:"Katolik", name: "Katolik"},
    {value:"Protestan", name: "Protestan"},
    {value:"Hindu", name: "Hindu"},
    {value:"Buddha", name: "Buddha"},
    {value:"Lain-Lain", name: "Lain-Lain"},
  ]
  
  let pasienTipeStatus = [
    {value:"umum", name: "UMUM"},
    {value:"bpjs", name: "BPJS"},
    {value:"lainnya", name: "Lainnya"},
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
</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem open title="Data Umum" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="" class="mb-2">Nomor Rekam Medis:</Label>
        <Input type="text" name=""/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Nama:</Label>
        <Input type="text" name=""/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Ruangan:</Label>
        <Input type="text" name=""/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">TTL:</Label>
        <Input type="text" name=""/>
      </div>
      <div class="group mb-5">
        <Label>Agama
          <Select name="agama" class="mt-2" items={agamaPasien}/>
        </Label>
      </div>
      <div class="group mb-5">
        <Label for='alamat_tempat_tinggal' class='block mb-2'>Alamat Tempat Tinggal:</Label>
        <Textarea name="alamat_tempat_tinggal" id="alamat_tempat_tinggal" placeholder="Masukkan alamat tempat tinggal pasien" rows="1" />
      </div>
      <div class="group mb-5">
        <Label for='alamat_ktp' class='block mb-2'>Alamat KTP:</Label>
        <Textarea name="alamat_ktp" id="alamat_ktp" placeholder="Masukkan alamat sesuai ktp pasien" rows="1"/>
      </div>
    </TabItem>
    <TabItem title="Data Penanggung Jawab" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="group mb-5">
        <Label for='nama_pj' class='block mb-2'>Penanggung Jawab:</Label>
        <Input id="nama_pj" name="nama_pj" placeholder="Masukkan nama penanggung jawab pasien"/>
      </div>
      <div class="group mb-5">
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
      <div class="group mb-5">
        <Label for='alamat_tempat_tinggal_pj' class='block mb-2'>Alamat Tempat Tinggal:</Label>
        <Textarea name="alamat_tempat_tinggal_pj" id="alamat_tempat_tinggal_pj" placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien" rows="2"/>
      </div>
      <div class="group mb-5">
        <Label for='alamat_ktp_pj' class='block mb-2'>Alamat KTP:</Label>
        <Textarea name="alamat_ktp_pj" id="alamat_ktp_pj" placeholder="Masukkan alamat sesuai ktp penanggung jawab pasien" rows="2"/>
      </div>
      <div class="group mb-5">
        <Label for='no_telp_pj' class='block mb-2'>Nomor Telepon/HP:</Label>
        <Input id="no_telp_pj" name="no_telp_pj" placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"/>
      </div>
    </TabItem>
    <TabItem title="Data Pembayaran" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
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
    </TabItem>
  </Tabs>
  <br>
  <div class="text-right">
    <Button color="green">Update & Simpan</Button>
  </div>
</main>