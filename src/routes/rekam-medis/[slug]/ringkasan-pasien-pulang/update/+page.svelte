<script>

  import { Accordion, AccordionItem, Button, Input, Label, Search, Select, Textarea } from "flowbite-svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Swal from 'sweetalert2';
  
  const no_rm = $page.params.slug;

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Ringkasan Pasien Pulang?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Ringkasan Pasien Pulang Berhasil Disimpan & Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto(`/rekam-medis/${no_rm}/ringkasan-pasien-pulang`)
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

  let cara_pulang = [
    {value:"Ijin", name: "Ijin"},
    {value:"Rujuk Rumah Sakit", name: "Rujuk Rumah Sakit"},
    {value:"Atas Permintaan Pasien", name: "Atas Permintaan Pasien"},
  ]
  
  let keadaan_pulang = [
    {value:"Sembuh", name: "Sembuh"},
    {value:"Perbaikan", name: "Perbaikan"},
    {value:"Tak Sembuh", name: "Tak Sembuh"},
    {value:"Meninggal (</>48 Jam)", name: "Meninggal (</>48 Jam)"},
  ]
  
  let diagnosaUtama = [
		{
			kode_icd10: "",
			deskripsi_diagnosa: "",
		},
	];

	function addDiagnosaUtama() {
		diagnosaUtama = [
			...diagnosaUtama,
			{
				kode_icd10: "",
				deskripsi_diagnosa: "",
			},
		];
	}

	function deleteDiagnosaUtama(index) {
		diagnosaUtama = diagnosaUtama.filter((_, i) => i !== index);
	}
  
  let diagnosaSekunder = [
		{
			kode_icd10: "",
			deskripsi_diagnosa: "",
		},
	];

	function addDiagnosaSekunder() {
		diagnosaSekunder = [
			...diagnosaSekunder,
			{
				kode_icd10: "",
				deskripsi_diagnosa: "",
			},
		];
	}

	function deleteDiagnosaSekunder(index) {
		diagnosaSekunder = diagnosaSekunder.filter((_, i) => i !== index);
	}
  
  let tindakan = [
		{
			kode_icd9: "",
			deskripsi_tindakan: "",
		},
	];

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
  
  let edukasi = [
		{
			deskripsi: "",
		},
	];

	function addEdukasi() {
		edukasi = [
			...edukasi,
			{
			deskripsi: "",
			},
		];
	}

	function deleteEdukasi(index) {
		edukasi = edukasi.filter((_, i) => i !== index);
	}

</script>

<main>
  <form on:submit|preventDefault={()=>handleSubmit(no_rm)}>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Ringkasan Pasien Pulang</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <Accordion>
      <AccordionItem open>
        <span slot="header">Ringkasan Informasi <span class="text-sm text-red-500 italic">*</span></span>
        <div class="grid grid-cols-2 gap-4 overflow-y-auto max-h-screen">
          <div class="my-2">
            <Label for="" class="mb-2">Tanggal Masuk: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input type="date" name="" id=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Tanggal Keluar: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input type="date" name="" id=""/>
          </div>
          <div class="my-2 col-span-2">
            <Label for="" class="mb-2">Alergi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2 col-span-2">
            <Label for="" class="mb-2">Indikasi Rawat Inap / Diagnosis Masuk: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2 col-span-2">
            <Label for="" class="mb-2">Pemeriksaan Fisik: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2 col-span-2">
            <Label for="" class="mb-2">Hasil Pemeriksaan Penunjang: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2 col-span-2">
            <Label for="" class="mb-2">Diagnosa Utama: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="grid grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination col-span-2 flex gap-4">
                <Search size="md" placeholder="ICD-10 Koding Search"></Search>
                <Button size="md" on:click={addDiagnosaUtama}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Diagnosa
                </Button>
              </div>
              <div class="grouphelperPagination col-span-2">
                {#each diagnosaUtama as tag, i}
                  <div class="flex gap-4 py-2">
                    <Textarea name="diagnosa_utama[]" placeholder="Masukkan Diagnosa Utama" rows="2" bind:value={diagnosaUtama[i].deskripsi_diagnosa}/>
                    <Input name="diagnosa_utama_icd10[]" placeholder="Masukkan Kode ICD-10" bind:value={diagnosaUtama[i].kode_icd10}/>
                    <Button on:click={() => deleteDiagnosaUtama(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <div class="my-2 col-span-2">
            <div class="flex mb-2 gap-4 justify-between items-center">
              <Label for="">Diagnosa Sekunder: <span class="text-sm text-red-500 italic">*</span></Label>
              <Button size="md" on:click={addDiagnosaSekunder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Diagnosa
              </Button>
            </div>
            <div class="grid grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination col-span-2">
                {#each diagnosaSekunder as tag, i}
                  <div class="flex gap-4 py-2">
                    <Textarea name="diagnosa_sekunder[]" placeholder="Masukkan Diagnosa Sekunder" rows="2" bind:value={diagnosaSekunder[i].deskripsi_diagnosa}/>
                    <Input name="diagnosa_sekunder_icd10[]" placeholder="Masukkan Kode ICD-10" bind:value={diagnosaSekunder[i].kode_icd10}/>
                    <Button on:click={() => deleteDiagnosaSekunder(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Terapi Selama Dirawat: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Terapi Dirumah: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2 col-span-2">
            <Label for="" class="mb-2">Tindakan/Operasi yang Sudah Dilakukan: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="grid grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination col-span-2 flex gap-4">
                <Search size="md" placeholder="ICD-9 Koding Search"></Search>
                <Button size="md" on:click={addTindakan}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tindakan
                </Button>
              </div>
              <div class="grouphelperPagination col-span-2">
                {#each tindakan as tag, i}
                  <div class="flex gap-4 py-2">
                    <Textarea name="tindakan[]" placeholder="Masukkan Tindakan" rows="2" bind:value={tindakan[i].deskripsi_tindakan}/>
                    <Input name="tindakan_icd9[]" placeholder="Masukkan Kode ICD-9" bind:value={tindakan[i].kode_icd9}/>
                    <Button on:click={() => deleteTindakan(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">Kondisi Pasien Pulang (<span class="italic">Status Present</span>) <span class="text-sm text-red-500 italic">*</span></span>
        <div class="my-2">
          <Label for="" class="mb-2">Keadaan Umum/GCS: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-col gap-2">
            <div class="grid grid-cols-3 gap-2">
              <span>Tensi:</span>
              <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="tensi" size="sm" />
              <span>mmHg</span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <span>Nadi:</span>
              <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="nadi" size="sm" />
              <span>x/mnt</span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <span>RR:</span>
              <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="nadi" size="sm" />
              <span>x/mnt</span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <span>Suhu:</span>
              <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="suhu" size="sm" />
              <span>C</span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <span>SpO2:</span>
              <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="sp02" size="sm" />
              <span>%</span>
            </div>
          </div>
        </div>
        <div class="my-2">
          <Label>Cara Pulang:  <span class="text-sm text-red-500 italic">*</span>
            <Select class="mt-2" items={cara_pulang}/>
          </Label>
        </div>
        <div class="my-2">
          <Label>Keadaan Pulang:  <span class="text-sm text-red-500 italic">*</span>
            <Select class="mt-2" items={keadaan_pulang}/>
          </Label>
        </div>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">Instruksi Tindak Lanjut <span class="text-sm text-red-500 italic">*</span></span>
        <div class="my-2">
          <Label for="" class="mb-2">Kontrol di RSI Aisyah Malang</Label>
          <div class="my-2">
            <Label for="" class="mb-2">Poliklinik:</Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">DPJP:</Label>
            <Textarea name="" id=""/>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal:</Label>
              <Input type="date" name="" id=""/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Jam:</Label>
              <div class="flex">
                <Input type="number" value="00" name="makan_minum_terakhir_hour" min="0" max="24"/>
                <p class="text-lg font-semibold mx-2">:</p>
                <Input type="number" value="00" name="makan_minum_terakhir_minute" min="0" max="59"/>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-5">
        <div class="my-2">
          <Label for="" class="mb-2">Rujuk/Rujuk Balik di Luar RSI Aisyah Malang</Label>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Instansi:</Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Keterangan:</Label>
            <Textarea name="" id=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Tanggal:</Label>
            <Input type="date" name="" id=""/>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">Edukasi<span class="text-sm text-red-500 italic">*</span></span>
        <div class="my-2">
          <div class="flex mb-2 gap-4 justify-between items-center">
            <Label for="">Daftar Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Button size="md" on:click={addEdukasi}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Edukasi
            </Button>
          </div>
          <div class="grid grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination col-span-2">
              {#each edukasi as tag, i}
                <div class="flex gap-4 py-2">
                  <Textarea name="edukasi[]" placeholder="Masukkan Edukasi" rows="2" bind:value={edukasi[i].deskripsi}/>
                  <Button on:click={() => deleteEdukasi(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  </form>
</main>