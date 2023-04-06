<script>
  import { page } from '$app/stores';
  import { Button, Input, Label, Radio, Search, Select, Textarea } from 'flowbite-svelte';
  import { goto } from '$app/navigation';
  import Swal from 'sweetalert2';

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
  
  let agamaPasien = [
    {value:"Islam", name: "Islam"},
    {value:"Katolik", name: "Katolik"},
    {value:"Protestan", name: "Protestan"},
    {value:"Hindu", name: "Hindu"},
    {value:"Buddha", name: "Buddha"},
    {value:"Lain-Lain", name: "Lain-Lain"},
  ]
  
  let poliklinik = [
    {value:"Poliklinik Obstetri & Ginekologi", name: "Poliklinik Obstetri & Ginekologi"},
    {value:"Poliklinik Anak", name: "Poliklinik Anak"},
    {value:"Poliklinik Penyakit Dalam", name: "Poliklinik Penyakit Dalam"},
    {value:"Poliklinik Bedah Umum", name: "Poliklinik Bedah Umum"},
    {value:"Poliklinik Bedah Onkologi", name: "Poliklinik Bedah Onkologi"},
    {value:"Poliklinik Mata", name: "Poliklinik Mata"},
    {value:"Poliklinik Saraf", name: "Poliklinik Saraf"},
    {value:"Poliklinik Bedah Digistif", name: "Poliklinik Bedah Digistif"},
    {value:"Poli Paru", name: "Poli Paru"},
    {value:"Poliklinik Orthopaedi", name: "Poliklinik Orthopaedi"},
    {value:"Poliklinik Bedah Plastik", name: "Poliklinik Bedah Plastik"},
    {value:"Poliklinik Urologi", name: "Poliklinik Urologi"},
    {value:"Poliklinik Jiwa", name: "Poliklinik Jiwa"},
    {value:"Poliklinik Kulit & Kelamin", name: "Poliklinik Kulit & Kelamin"},
    {value:"Poliklinik THT", name: "Poliklinik THT"},
    {value:"Poliklinik Gizi", name: "Poliklinik Gizin"},
    {value:"Poliklinik Anastesi", name: "Poliklinik Anastesi"},
    {value:"Poliklinik Gigi & Mulut", name: "Poliklinik Gigi & Mulut"},
    {value:"Poliklinik Bedah Mulut", name: "Poliklinik Bedah Mulut"},
    {value:"Poliklinik Bedah Syaraf", name: "Poliklinik Bedah Syaraf"},
  ]
  
  let dpjpUtama = [
    {value:"dr. Khal Drogo, M.Biomed, Sp.PD", name: "dr. Khal Drogo, M.Biomed, Sp.PD"},
    {value:"dr. Viserys Targaryen, M.Biomed, Sp.JP", name: "dr. Viserys Targaryen, M.Biomed, Sp.JP"},
    {value:"dr. Khal Drogo, M.Biomed, Sp.OT", name: "dr. Khal Drogo, M.Biomed, Sp.OT"},
    {value:"dr. Viserys Targaryen. Sp. KJ", name: "dr. Viserys Targaryen. Sp. KJ"},
    {value:"dr. Ramsay Bolton	,Sp.KK", name: "dr. Ramsay Bolton	,Sp.KK"},
    {value:"dr. Ramsay Bolton	, M.Kes., Sp.GK", name: "dr. Ramsay Bolton	, M.Kes., Sp.GK"},
  ]

  let selectedUnit
  const onChangeUnit = (event) => {
    selectedUnit = event.currentTarget.value
  }
  
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
          timer: 1500
        }).then(()=>{
          goto(`/rekam-medis/${no_rm}/informasi-pasien`)
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

  let diagnosaSementara = [
		{
			kode_icd10: "",
			deskripsi_diagnosa: "",
		},
	];
  
  let tindakan = [
		{
			kode_icd9: "",
			deskripsi_tindakan: "",
		},
	];

	function addDiagnosa() {
		diagnosaSementara = [
			...diagnosaSementara,
			{
				kode_icd10: "",
				deskripsi_diagnosa: "",
			},
		];
	}

	function deleteDiagnosa(index) {
		diagnosaSementara = diagnosaSementara.filter((_, i) => i !== index);
	}

	function addTindakan() {
		tindakan = [
			...tindakan,
			{
				kode_icd9: "",
				deskripsi_tindakan: "",
			},
		];
	}

	function deleteTindakan(index) {
		tindakan = tindakan.filter((_, i) => i !== index);
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
      <div class="border border-slate-300 rounded p-4 w-full">
        <p class="text-xl font-semibold">Data Pemeriksaan</p>
        <hr class="my-2">
        <div class="mb-2">
          <p class="text-lg font-medium italic">Pasien Masuk Melalui</p>
          <div class="grid grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label for='' class='block mb-2'>Unit: <span class="text-red-500 text-lg">*</span></Label>
              <div class="flex gap-2">
                <Radio name="masuk_melalui" checked={selectedUnit==="IGD"} on:change={onChangeUnit} value="IGD">IGD</Radio>
                <Radio name="masuk_melalui" checked={selectedUnit==="Poliklinik"} on:change={onChangeUnit} value="Poliklinik">Poliklinik</Radio>
              </div>
            </div>
            {#if selectedUnit==="Poliklinik"}
              <div class="grouphelperPagination">
                <Label>Poliklinik:  <span class="text-red-500 text-lg">*</span>
                  <Select name="polikinik" class="mt-2" items={poliklinik}/>
                </Label>
              </div>
            {/if}
          </div>
          <div class="group mb-4">
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-medium italic">Diagnosa & Tindakan</p>
          <div class="grid grid-cols-2 gap-4 py-2">
            <div class="col-span-2 grouphelperPagination">
              <Label>DPJP Utama:  <span class="text-red-500 text-lg">*</span>
                <Select name="dpjp_utama" class="mt-2" items={dpjpUtama}/>
              </Label>
            </div>
            <div class="grouphelperPagination col-span-2 flex gap-4">
              <Search size="md" placeholder="ICD-10 Koding Search"></Search>
              <Button size="md" on:click={addDiagnosa}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Diagnosa
              </Button>
            </div>
            <div class="grouphelperPagination col-span-2">
              {#each diagnosaSementara as tag, i}
                <div class="flex gap-4 py-2">
                  <Textarea name="diagnosa_sementara[]" placeholder="Masukkan Diagnosa Sementara" rows="2" bind:value={diagnosaSementara[i].deskripsi_diagnosa}/>
                  <Input name="icd10[]" placeholder="Masukkan Kode ICD-10" bind:value={diagnosaSementara[i].kode_icd10}/>
                  <Button on:click={() => deleteDiagnosa(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                </div>
              {/each}
            </div>
            <div class="grouphelperPagination col-span-2 flex gap-4">
              <Search size="md" placeholder="ICD-10 Koding Search"></Search>
              <Button size="md" on:click={addTindakan}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tindakan
              </Button>
            </div>
            <div class="grouphelperPagination col-span-2">
              {#each tindakan as tag, i}
                <div class="flex gap-4 py-2">
                  <Textarea name="tindakan[]" placeholder="Masukkan Tindakan" rows="2" bind:value={tindakan[i].deskripsi_tindakan}/>
                  <Input name="icd19[]" placeholder="Masukkan Kode ICD-9" bind:value={tindakan[i].kode_icd9}/>
                  <Button on:click={() => deleteTindakan(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-medium italic">Ruangan</p>
          <div class="grid grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label>Jenis Kamar:  <span class="text-red-500 text-lg">*</span>
                <Select name="jenis_kamar" class="mt-2" items={jenisRuangan}/>
              </Label>
            </div>
            <div class="grouphelperPagination">
              <Label>Nama Kamar:  <span class="text-red-500 text-lg">*</span>
                <Select name="nama_kamar" class="mt-2" items={namaRuangan}/>
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>