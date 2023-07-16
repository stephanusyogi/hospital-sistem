<script>

  import { Accordion, AccordionItem, Button, Checkbox, Dropzone, Fileupload, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Swal from 'sweetalert2';
  import { onMount } from "svelte";

  export let data
  export let form

  const no_rm = $page.params.slug;

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Edukasi Pasien & Keluarga?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    })
  }
  let keyakinan_nilai
  let tingkat_edukasi
  let bahasa_yang_digunakan
  let kesediaan_menerima_informasi
  let diagnosis_masuk
  let rencana_operasi
  let penerjemah
  let perawatan_pendamping
  let asuhan_berkelanjutan
  let media_edukasi
  let img_dir_penandaan_lokasi_operasi
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.edukasi_pasien.length !== 0){
      keyakinan_nilai = data.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].keyakinan_nilai
      tingkat_edukasi = data.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].tingkat_edukasi
      bahasa_yang_digunakan = data.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].bahasa_yang_digunakan
      kesediaan_menerima_informasi = data.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].kesediaan_menerima_informasi
      diagnosis_masuk = data.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].diagnosis_masuk
      rencana_operasi = data.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].rencana_operasi
      penerjemah = data.edukasi_pasien.kebutuhan_edukasi[0].penerjemah
      perawatan_pendamping = data.edukasi_pasien.kebutuhan_edukasi[0].perawatan_pendamping
      asuhan_berkelanjutan = data.edukasi_pasien.kebutuhan_edukasi[0].asuhan_berkelanjutan
      media_edukasi = data.edukasi_pasien.kebutuhan_edukasi[0].media_edukasi
      img_dir_penandaan_lokasi_operasi = data.edukasi_pasien.img_dir_penandaan_lokasi_operasi
    }
  })
</script>
<main>
  <form id="form" on:submit|preventDefault={()=>handleSubmit(no_rm)} method="post" enctype="multipart/form-data">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.10 Edukasi Pasien & Keluarga Terintegrasi</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green" size="sm">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <p class="text-lg font-semibold italic">Pengkajian Kebutuhan Edukasi</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="" class="mb-2">Keyakinan & nilai-nilai pribadi pasien & keluarga: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio name="keyakinan_nilai" checked={keyakinan_nilai === 'Tidak Ada' ? true : false } value="Tidak Ada">Tidak Ada</Radio>
          <Radio name="keyakinan_nilai" checked={keyakinan_nilai === 'Ada' ? true : false } value="Ada">Ada</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Tingkat Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'SD' ? true : false } value="SD">SD</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'SMP' ? true : false } value="SMP">SMP</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'SMA' ? true : false } value="SMA">SMA</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'D3' ? true : false } value="D3">D3</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'S1' ? true : false } value="S1">S1</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'S2' ? true : false } value="S2">S2</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'S3' ? true : false } value="S3">S3</Radio>
          <Radio name="tingkat_edukasi" checked={tingkat_edukasi === 'Tidak Sekolah' ? true : false } value="Tidak Sekolah">Tidak Sekolah</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Bahasa yang Digunakan: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input placeholder="" name="bahasa_yang_digunakan" id="" bind:value={bahasa_yang_digunakan}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Kesediaan Menerima Informasi & Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={kesediaan_menerima_informasi === 'Ya' ? true : false }  name="kesediaan_menerima_informasi" value="Ya">Ya</Radio>
          <Radio checked={kesediaan_menerima_informasi === 'Tidak' ? true : false }  name="kesediaan_menerima_informasi" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Diagnosis Masuk: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" rows="2" placeholder="" name="diagnosis_masuk" bind:value={diagnosis_masuk}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Rencana Operasi: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={rencana_operasi === 'Ya' ? true : false } name="rencana_operasi" value="Ya">Ya</Radio>
          <Radio checked={rencana_operasi === 'Tidak' ? true : false } name="rencana_operasi" value="Tidak">Tidak</Radio>
        </div>
      </div>
    </div>
    <hr class="my-2">
    <p class="text-lg font-semibold italic">Kebutuhan Edukasi</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="" class="mb-2">Penerjemah: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={penerjemah === 'Ya' ? true : false } name="penerjemah" value="Ya">Ya</Radio>
          <Radio checked={penerjemah === 'Tidak' ? true : false } name="penerjemah" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Perawatan Pendamping: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={perawatan_pendamping === 'Ya' ? true : false } name="perawatan_pendamping" value="Ya">Ya</Radio>
          <Radio checked={perawatan_pendamping === 'Tidak' ? true : false } name="perawatan_pendamping" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Asuhan Berkelanjutan di Rumah: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={asuhan_berkelanjutan === 'Ya' ? true : false } name="asuhan_berkelanjutan" value="Ya">Ya</Radio>
          <Radio checked={asuhan_berkelanjutan === 'Tidak' ? true : false } name="asuhan_berkelanjutan" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Media Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={media_edukasi === 'Lisan' ? true : false }  name="media_edukasi" value="Lisan">Lisan</Radio>
          <Radio checked={media_edukasi === 'Leafleat' ? true : false } name="media_edukasi" value="Leafleat">Leafleat</Radio>
          <Radio checked={media_edukasi === 'Peragaan' ? true : false } name="media_edukasi" value="Peragaan">Peragaan</Radio>
        </div>
      </div>
    </div>
    <hr class="my-2">
    <div class="flex justify-between">
      <p class="text-lg font-semibold italic">Penandaan Lokasi Operasi</p>
      {#if img_dir_penandaan_lokasi_operasi !== ''}
        <p class="font-light sm:text-right"><a href={img_dir_penandaan_lokasi_operasi} target="_blank" rel="noreferrer">Lihat File</a></p>
      {/if}
    </div>
    <Fileupload name="img_dir_penandaan_lokasi_operasi"/>
  </form>
</main>