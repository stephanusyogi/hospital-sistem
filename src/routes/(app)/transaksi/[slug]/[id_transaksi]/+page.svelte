<script>

  import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem, Button, Input, Label, Select, Textarea } from "flowbite-svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";

  const no_rm = $page.params.slug;
  const id_transaksi = $page.params.id_transaksi;

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Nota?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Nota Disimpan & Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto(`/transaksi/${no_rm}`)
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
  
  let dpjp = [
    {value:"dr. Khal Drogo, Sp PD FINASIM", name: "dr. Khal Drogo, Sp PD FINASIM"},
    {value:"dr. Ramsay Bolton, Sp AN", name: "dr. Ramsay Bolton, Sp AN"},
    {value:"dr. Viserys II S, Sp.KJ", name: "dr. Viserys II S, Sp.KJ"},
  ]
  
  let administrasi = [
		{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
		},
	];

	function addAdministrasi() {
		administrasi = [
			...administrasi,
			{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
			},
		];
	}

	function deleteAdministrasi(index) {
		administrasi = administrasi.filter((_, i) => i !== index);
	}
  
  let ruang_perawatan = [
		{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
		},
	];

	function addRuangPerawatan() {
		ruang_perawatan = [
			...ruang_perawatan,
			{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
			},
		];
	}

	function deleteRuangPerawatan(index) {
		ruang_perawatan = ruang_perawatan.filter((_, i) => i !== index);
	}
  
  let visit_dokter = [
		{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
		},
	];

	function addVisitDokter() {
		visit_dokter = [
			...visit_dokter,
			{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
			},
		];
	}

	function deleteVisitDokter(index) {
		visit_dokter = visit_dokter.filter((_, i) => i !== index);
	}
  
  let obat_bahan = [
		{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
		},
	];

	function addObatBahan() {
		obat_bahan = [
			...obat_bahan,
			{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
			},
		];
	}

	function deleteObatBahan(index) {
		obat_bahan = obat_bahan.filter((_, i) => i !== index);
	}
  
  
  let tindakan_medis = [
		{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
		},
	];

	function addTindakanMedis() {
		tindakan_medis = [
			...tindakan_medis,
			{
			deskripsi: "",
			tanggal: "",
      satuan: "",
      quantity: "",
			},
		];
	}

	function deleteTindakanMedis(index) {
		tindakan_medis = tindakan_medis.filter((_, i) => i !== index);
	}

</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6  mt-10">
  <section>
    <form on:submit|preventDefault={()=>handleSubmit(no_rm)}>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xl font-semibold">Nota Pasien Rawat Inap</p>
          <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
        </div>
        <Button type="submit" color="green">Simpan Perubahan</Button>
      </div>
      <hr class="my-5">
      <Accordion>
        <AccordionItem open>
          <span slot="header">Administrasi <span class="text-sm text-red-500 italic">*</span></span>
          <div class="grouphelperPagination col-span-2 flex gap-4 items-center">
            <Label for="" class="mb-2">Administrasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Button size="md" on:click={addAdministrasi}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tambah
            </Button>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Pendaftaran Rawat Inap" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="20000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="grouphelperPagination col-span-2">
            {#each administrasi as tag, i}
              <div class="flex gap-6">
                <div class="my-2">
                  <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input id="" placeholder="" name="deskripsi_administrasi[]" bind:value={administrasi[i].deskripsi}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="date" id="" placeholder="" name="tanggal_administrasi[]" bind:value={administrasi[i].tanggal}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="satuan_administrasi[]" bind:value={administrasi[i].satuan}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="quantity_administrasi[]" bind:value={administrasi[i].quantity}/>
                </div>
                <div class="flex items-end justify-center my-2">
                  <div class="w-10">
                    <Button on:click={() => deleteAdministrasi(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Ruang Perawatan <span class="text-sm text-red-500 italic">*</span></span>
          <div class="grouphelperPagination col-span-2 flex gap-4 items-center">
            <Label for="" class="mb-2">Ruang Perawatan: <span class="text-sm text-red-500 italic">*</span></Label>
            <Button size="md" on:click={addRuangPerawatan}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tambah
            </Button>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Kamar Ayodya" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="2500000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Kamar Ayodya" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="2500000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="grouphelperPagination col-span-2">
            {#each ruang_perawatan as tag, i}
              <div class="flex gap-6">
                <div class="my-2">
                  <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input id="" placeholder="" name="deskripsi_ruang_perawatan[]" bind:value={ruang_perawatan[i].deskripsi}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="date" id="" placeholder="" name="tanggal_ruang_perawatan[]" bind:value={ruang_perawatan[i].tanggal}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="satuan_ruang_perawatan[]" bind:value={ruang_perawatan[i].satuan}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="quantity_ruang_perawatan[]" bind:value={ruang_perawatan[i].quantity}/>
                </div>
                <div class="flex items-end justify-center my-2">
                  <div class="w-10">
                    <Button on:click={() => deleteRuangPerawatan(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Visit Dokter <span class="text-sm text-red-500 italic">*</span></span>
          <div class="grouphelperPagination col-span-2 flex gap-4 items-center">
            <Label for="" class="mb-2">Visit Dokter: <span class="text-sm text-red-500 italic">*</span></Label>
            <Button size="md" on:click={addVisitDokter}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tambah
            </Button>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Nama Dokter: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="dr. Khal Drogo, Sp PD FINASIM" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Visit Pertama Dokter" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="100000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Nama Dokter: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="dr. Ramsay Bolton, Sp AN" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Visit Dokter Umum" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="100000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Nama Dokter: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="dr. Viserys II S, Sp.KJ" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Visit Dokter Spesialis" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="100000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="grouphelperPagination col-span-2">
            {#each visit_dokter as tag, i}
              <div class="flex gap-6">
                <div class="my-2">
                  <Label>Nama Dokter:  <span class="text-sm text-red-500 italic">*</span>
                    <Select class="mt-2" items={dpjp}/>
                  </Label>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input id="" placeholder="" name="deskripsi_visit_dokter[]" bind:value={visit_dokter[i].deskripsi}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="date" id="" placeholder="" name="tanggal_visit_dokter[]" bind:value={visit_dokter[i].tanggal}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="satuan_visit_dokter[]" bind:value={visit_dokter[i].satuan}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="quantity_visit_dokter[]" bind:value={visit_dokter[i].quantity}/>
                </div>
                <div class="flex items-end justify-center my-2">
                  <div class="w-10">
                    <Button on:click={() => deleteVisitDokter(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Obat & Bahan Habis Pakai <span class="text-sm text-red-500 italic">*</span></span>
          <div class="grouphelperPagination col-span-2 flex gap-4 items-center">
            <Label for="" class="mb-2">Obat & Bahan Habis Pakaian: <span class="text-sm text-red-500 italic">*</span></Label>
            <Button size="md" on:click={addObatBahan}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tambah
            </Button>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Artesunate tablet" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="50000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Ambroxol Sirup" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="50000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="grouphelperPagination col-span-2">
            {#each obat_bahan as tag, i}
              <div class="flex gap-6">
                <div class="my-2">
                  <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input id="" placeholder="" name="deskripsi_obat_bahan[]" bind:value={obat_bahan[i].deskripsi}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="date" id="" placeholder="" name="tanggal_obat_bahan[]" bind:value={obat_bahan[i].tanggal}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="satuan_obat_bahan[]" bind:value={obat_bahan[i].satuan}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="quantity_obat_bahan[]" bind:value={obat_bahan[i].quantity}/>
                </div>
                <div class="flex items-end justify-center my-2">
                  <div class="w-10">
                    <Button on:click={() => deleteObatBahan(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">Tindakan Medis <span class="text-sm text-red-500 italic">*</span></span>
          <div class="grouphelperPagination col-span-2 flex gap-4 items-center">
            <Label for="" class="mb-2">Tindakan Medis: <span class="text-sm text-red-500 italic">*</span></Label>
            <Button size="md" on:click={addTindakanMedis}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Tambah
            </Button>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Pemasangan Infus" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="50000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="flex gap-6 py-2">
            <div class="my-2">
              <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input id="" placeholder="" name="" value="Uji Laboratotium" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="date" id="" placeholder="" name="" value="2023-04-08" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="50000" readonly/>
            </div>
            <div class="my-2">
              <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
              <Input type="number" id="" placeholder="" name="" value="1" readonly/>
            </div>
            <div class="flex items-end justify-center my-2">
              <div class="w-10">
                <Button size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            </div>
          </div>
          <div class="grouphelperPagination col-span-2">
            {#each tindakan_medis as tag, i}
              <div class="flex gap-6">
                <div class="my-2">
                  <Label for="" class="mb-2">Deskripsi: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input id="" placeholder="" name="deskripsi_tindakan_medis[]" bind:value={tindakan_medis[i].deskripsi}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Tanggal: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="date" id="" placeholder="" name="tanggal_tindakan_medis[]" bind:value={tindakan_medis[i].tanggal}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Satuan: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="satuan_tindakan_medis[]" bind:value={tindakan_medis[i].satuan}/>
                </div>
                <div class="my-2">
                  <Label for="" class="mb-2">Quantity: <span class="text-sm text-red-500 italic">*</span></Label>
                  <Input type="number" id="" placeholder="" name="quantity_tindakan_medis[]" bind:value={tindakan_medis[i].quantity}/>
                </div>
                <div class="flex items-end justify-center my-2">
                  <div class="w-10">
                    <Button on:click={() => deleteTindakanMedis(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </AccordionItem>
      </Accordion>
    </form>
  </section>
</div>