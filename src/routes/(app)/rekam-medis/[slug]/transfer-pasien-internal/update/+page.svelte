<script>

  import { Accordion, AccordionItem, Button, ButtonGroup, Input, InputAddon, Label, Radio, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea} from "flowbite-svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Swal from 'sweetalert2';

  const no_rm = $page.params.slug;

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Transfer Pasien Internal?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Transfer Pasien Internal berhasil Disimpan & Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto(`/rekam-medis/${no_rm}/transfer-pasien-internal`)
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

  let pemeriksaan_diagnostik = [
		{
			jenis: "",
      dibawakan: "",
		},
	];

	function addPemeriksaanDiagnostik() {
		pemeriksaan_diagnostik = [
			...pemeriksaan_diagnostik,
			{
        jenis: "",
        dibawakan: "",
			},
		];
	}

	function deletePemeriksaanDiagnostik(index) {
		pemeriksaan_diagnostik = pemeriksaan_diagnostik.filter((_, i) => i !== index);
	}
  
  let pengobatan = [
		{
			value: "",
		},
	];

	function addPengobatan() {
		pengobatan = [
			...pengobatan,
			{
        value: "",
			},
		];
	}

	function deletePengobatan(index) {
		pengobatan = pengobatan.filter((_, i) => i !== index);
	}
  
  let prosedur = [
		{
			value: "",
		},
	];

	function addProsedur() {
		prosedur = [
			...prosedur,
			{
        value: "",
			},
		];
	}

	function deleteProsedur(index) {
		prosedur = prosedur.filter((_, i) => i !== index);
	}
</script>
<main>
  <form on:submit|preventDefault={()=>handleSubmit(no_rm)}>
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.13 Transfer Pasien Internal</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <Accordion>
      <AccordionItem open>
        <span slot="header">General <span class="text-sm text-red-500 italic">*</span></span>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-screen">
          <div class="my-2">
            <Label for="" class="mb-2">Ruangan Asal: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Ruangan Tujuan: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Petugas yang Menghubungi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Petugas Penerima: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Label for="" class="mb-2">Tanggal Berangkat:</Label>
                <Input name="" type="date"/>
              </div>
              <div>
                <Label for="" class="mb-2">Jam Berangkat:</Label>
                <div class="flex">
                  <Input type="number" value="00" name="jam_berangkat_hour" min="0" max="24"/>
                  <p class="text-lg font-semibold mx-2">:</p>
                  <Input type="number" value="00" name="jam_berangkat_minute" min="0" max="59"/>
                </div>
              </div>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Alasan Mentransfer: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="alasan_mentransfer" value="Perlu Perawatan Lebih Lanjut">Perlu Perawatan Lebih Lanjut</Radio>
              <Radio name="alasan_mentransfer" value="Permintaan Pasien atau Keluarga">Permintaan Pasien atau Keluarga</Radio>
              <Radio name="alasan_mentransfer" value="Lain-Lain">Lain-Lain</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Level Transfer: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="level_transfer" value="Level 0">Level 0</Radio>
              <Radio name="level_transfer" value="Level 0,5">Level 0,5</Radio>
              <Radio name="level_transfer" value="Level 1">Level 1</Radio>
              <Radio name="level_transfer" value="Level 2">Level 2</Radio>
              <Radio name="level_transfer" value="Level 3">Level 3</Radio>
            </div>
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2">Indikasi Dirawat: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2">Diagnosa Medis: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">Catatan Klinis <span class="text-sm text-red-500 italic">*</span></span>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-screen">
          <div class="my-2">
            <Label for="" class="mb-2">Anamnesis: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Pemeriksaan Fisik: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2 sm:col-span-2">
            <div class="flex items-center justify-between gap-4">
              <Label>Pemeriksaan Diagnostik:  <span class="text-sm text-red-500 italic">*</span>  </Label>
              <Button size="xs"  on:click={addPemeriksaanDiagnostik}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
              </Button>
            </div>
            {#each pemeriksaan_diagnostik as tag, i}
              <div class="flex items-center flex-wrap sm:flex-nowrap gap-4 py-2">
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="my-2">
                    <Label for="" class="mb-2">Jenis:</Label>
                    <Textarea rows="2" name="pemeriksaan_diagnostik_jenis[]" bind:value={pemeriksaan_diagnostik[i].jenis}/>
                  </div>
                  <div class="my-2">
                    <Label for="" class="mb-2">Dibawakan:</Label>
                    <Textarea rows="2" name="pemeriksaan_diagnostik_dibawakan[]" bind:value={pemeriksaan_diagnostik[i].dibawakan}/>
                  </div>
                </div>
                <Button on:click={() => deletePemeriksaanDiagnostik(i)} size="xs" color="red" class="mt-2 w-full sm:w-24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            {/each}
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Alergi: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="alergi" value="Ya">Ya</Radio>
              <Radio name="alergi" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Riwayat Penyakit: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="riwayat_penyakit" value="Tidak Ada">Tidak Ada</Radio>
              <Radio name="riwayat_penyakit" value="Ada">Ada</Radio>
              <Radio name="riwayat_penyakit" value="CVA">CVA</Radio>
              <Radio name="riwayat_penyakit" value="Diabetes">Diabetes</Radio>
              <Radio name="riwayat_penyakit" value="Lain-Lain">Lain-Lain</Radio>
              <Textarea id="riwayat_penyakit_lainnya" rows="2" placeholder="Masukkan riwayat penyakit lainnya" name="riwayat_penyakit_lainnya"/>
            </div>
          </div>
          <div class="my-2 sm:col-span-2">
            <div class="flex items-center justify-between gap-4">
              <Label>Pengobatan yang Sudah Diberikan:  <span class="text-sm text-red-500 italic">*</span>  </Label>
              <Button size="xs"  on:click={addPengobatan}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
              </Button>
            </div>
            {#each pengobatan as tag, i}
              <div class="flex items-center flex-wrap sm:flex-nowrap gap-4 py-2">
                <Textarea  class="w-full" rows="2" name="pengobatan_diberikan[]" bind:value={pengobatan[i].value}/>
                <Button on:click={() => deletePengobatan(i)} size="xs" color="red" class="mt-2 w-full sm:w-24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            {/each}
          </div>
          <div class="my-2 sm:col-span-2">
            <div class="flex items-center justify-between gap-4">
              <Label>Tindakan/Prosedur yang Dilakukan:  <span class="text-sm text-red-500 italic">*</span>  </Label>
              <Button size="xs"  on:click={addProsedur}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
              </Button>
            </div>
            {#each prosedur as tag, i}
              <div class="flex items-center flex-wrap sm:flex-nowrap gap-4 py-2">
                <Textarea  class="w-full" rows="2" name="prosedur_dilakukan[]" bind:value={prosedur[i].value}/>
                <Button on:click={() => deleteProsedur(i)} size="xs" color="red" class="mt-2 w-full sm:w-24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
              </div>
            {/each}
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Luka: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Makan/Minum Terakhir Jam: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex">
              <Input type="number" value="00" name="makan_minum_terakhir_hour" min="0" max="24"/>
              <p class="text-lg font-semibold mx-2">:</p>
              <Input type="number" value="00" name="makan_minum_terakhir_minute" min="0" max="59"/>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Lain-Lain: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea id="" placeholder="" name=""/>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">Kondisi Pasien <span class="text-sm text-red-500 italic">*</span></span>
        <Table>
          <TableHead theadClass="text-xs uppercase text-center">
            <TableHeadCell>Pemeriksaan</TableHeadCell>
            <TableHeadCell>Sebelum di Transfer</TableHeadCell>
            <TableHeadCell>Saat Diterima</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableBodyRow>
              <TableBodyCell>Kesadaran Umum</TableBodyCell>
              <TableBodyCell>
                <div class="flex flex-wrap gap-6">
                  <Radio name="kesadaran_umum_sebelum_transfer" value="Baik">Baik</Radio>
                  <Radio name="kesadaran_umum_sebelum_transfer" value="Cukup">Cukup</Radio>
                  <Radio name="kesadaran_umum_sebelum_transfer" value="Lemah">Lemah</Radio>
                  <Radio name="kesadaran_umum_sebelum_transfer" value="Jelek">Jelek</Radio>
                </div>
              </TableBodyCell>
              <TableBodyCell>
                <div class="flex flex-wrap gap-6">
                  <Radio name="kesadaran_umum_saat_diterima" value="Baik">Baik</Radio>
                  <Radio name="kesadaran_umum_saat_diterima" value="Cukup">Cukup</Radio>
                  <Radio name="kesadaran_umum_saat_diterima" value="Lemah">Lemah</Radio>
                  <Radio name="kesadaran_umum_saat_diterima" value="Jelek">Jelek</Radio>
                </div>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Kesadaran / GCS</TableBodyCell>
              <TableBodyCell>
                <p>Kesadaran</p>
                <Textarea id="kesadaran_sebelum_ditransfer" placeholder="Masukkan kesadaran" rows="2" name="kesadaran_sebelum_ditransfer"/>
                <br>
                <p>GCS</p>
                <Textarea id="gcs_sebelum_ditransfer" placeholder="Masukkan gcs" rows="2" name="gcs_sebelum_ditransfer"/>
              </TableBodyCell>
              <TableBodyCell>
                <p>Kesadaran</p>
                <Textarea id="kesadaran_saat_diterima" placeholder="Masukkan kesadaran" rows="2" name="kesadaran_saat_diterima"/>
                <br>
                <p>GCS</p>
                <Textarea id="gcs_saat_diterima" placeholder="Masukkan gcs" rows="2" name="gcs_saat_diterima"/>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Tekanan Darah</TableBodyCell>
              <TableBodyCell>
                <p>Sebelum ditransfer:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="tekanan_darah_sebelum_ditransfer" size="sm"/>
                  <InputAddon>mmHg</InputAddon>
                </ButtonGroup>
              </TableBodyCell>
              <TableBodyCell>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="tekanan_darah_saat_diterima" size="sm"/>
                  <InputAddon>mmHg</InputAddon>
                </ButtonGroup>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Suhu & Nadi</TableBodyCell>
              <TableBodyCell>
                <p>Suhu:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="suhu_sebelum_ditransfer" size="sm"/>
                  <InputAddon>°C</InputAddon>
                </ButtonGroup>
                <br>
                <p>Nadi:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="nadi_sebelum_ditransfer" size="sm"/>
                  <InputAddon>x/mnt</InputAddon>
                </ButtonGroup>
              </TableBodyCell>
              <TableBodyCell>
                <p>Suhu:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="suhu_saat_diterima" size="sm"/>
                  <InputAddon>°C</InputAddon>
                </ButtonGroup>
                <br>
                <p>Nadi:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="nadi_saat_diterima" size="sm"/>
                  <InputAddon>x/mnt</InputAddon>
                </ButtonGroup>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>RR & Saturasi</TableBodyCell>
              <TableBodyCell>
                <p>RR:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="rr_sebelum_ditransfer" size="sm"/>
                  <InputAddon>x/mnt</InputAddon>
                </ButtonGroup>
                <br>
                <p>Saturasi:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="saturasi_sebelum_ditransfer" size="sm"/>
                  <InputAddon>%</InputAddon>
                </ButtonGroup>
              </TableBodyCell>
              <TableBodyCell>
                <p>RR:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="rr_saat_diterima" size="sm"/>
                  <InputAddon>x/mnt</InputAddon>
                </ButtonGroup>
                <br>
                <p>Saturasi:</p>
                <ButtonGroup class="w-full col-span-2" size="md">
                  <Input id="input-addon-md" type="text" name="saturasi_saat_diterima" size="sm"/>
                  <InputAddon>x/mnt</InputAddon>
                </ButtonGroup>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Skala Nyeri</TableBodyCell>
              <TableBodyCell>
                <Textarea id="skala_nyeri_sebelum_ditransfer" placeholder="Masukkan skala nyeri" rows="2" name="skala_nyeri_sebelum_ditransfer"/>
              </TableBodyCell>
              <TableBodyCell>
                <Textarea id="skala_nyeri_saat_diterima" placeholder="Masukkan skala nyeri" rows="2" name="skala_nyeri_saat_diterima"/>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Resiko Jatuh</TableBodyCell>
              <TableBodyCell>
                <div class="flex flex-wrap gap-6">
                  <Radio name="resiko_jatuh_sebelum_transfer" value="Ringan">Ringan</Radio>
                  <Radio name="resiko_jatuh_sebelum_transfer" value="Sedang">Sedang</Radio>
                  <Radio name="resiko_jatuh_sebelum_transfer" value="Berat">Berat</Radio>
                </div>
              </TableBodyCell>
              <TableBodyCell>
                <div class="flex flex-wrap gap-6">
                  <Radio name="resiko_jatuh_saat_diterima" value="Ringan">Ringan</Radio>
                  <Radio name="resiko_jatuh_saat_diterima" value="Sedang">Sedang</Radio>
                  <Radio name="resiko_jatuh_saat_diterima" value="Berat">Berat</Radio>
                </div>
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
  </form>
</main>