<script>

  import { Accordion, AccordionItem, Button, ButtonGroup, Input, InputAddon, Label, Radio, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea} from "flowbite-svelte";
  import { page } from '$app/stores';
  import Swal from 'sweetalert2';
  import { onMount } from "svelte";

  const no_rm = $page.params.slug;
  export let data
  export let form

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
        const form = document.getElementById('form');
        form.submit()
      }
    })
  }

  let ruangan_asal
  let ruangan_tujuan
  let petugas_yang_menghubungi
  let petugas_penerima
  let tanggal_berangkat
  let jam_berangkat
  let alasan_mentransfer
  let level_transfer
  let indikasi_dirawat
  let diagnosa_medis
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.transfer_pasien_internal){
      ruangan_asal = data.transfer_pasien_internal.general[0].ruangan_asal
      ruangan_tujuan = data.transfer_pasien_internal.general[0].ruangan_tujuan
      petugas_yang_menghubungi = data.transfer_pasien_internal.general[0].petugas_yang_menghubungi
      petugas_penerima = data.transfer_pasien_internal.general[0].petugas_penerima
      tanggal_berangkat = data.transfer_pasien_internal.general[0].tanggal_berangkat
      jam_berangkat = data.transfer_pasien_internal.general[0].jam_berangkat
      alasan_mentransfer = data.transfer_pasien_internal.general[0].alasan_mentransfer
      level_transfer = data.transfer_pasien_internal.general[0].level_transfer
      indikasi_dirawat = data.transfer_pasien_internal.general[0].indikasi_dirawat
      diagnosa_medis = data.transfer_pasien_internal.general[0].diagnosa_medis
    }
  })
</script>
<main>
  <form id="form" on:submit|preventDefault={()=>handleSubmit(no_rm)} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.13 Transfer Pasien Internal</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <p class="text-lg font-semibold italic">General</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="" class="mb-2">Ruangan Asal:</Label>
        <Textarea id="" placeholder="" name="ruangan_asal" bind:value={ruangan_asal}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Ruangan Tujuan:</Label>
        <Textarea id="" placeholder="" name="ruangan_tujuan" bind:value={ruangan_tujuan}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Petugas yang Menghubungi:</Label>
        <Textarea id="" placeholder="" name="petugas_yang_menghubungi" bind:value={petugas_yang_menghubungi}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Petugas Penerima:</Label>
        <Textarea id="" placeholder="" name="petugas_penerima" bind:value={petugas_penerima}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Tanggal Berangkat:</Label>
        <Input name="tanggal_berangkat" type="date" bind:value={tanggal_berangkat}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Jam Berangkat:</Label>
        <Input name="jam_berangkat" type="text" bind:value={jam_berangkat}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Alasan Mentransfer:</Label>
        <div class="flex flex-wrap gap-2">
          <Radio name="alasan_mentransfer" checked={alasan_mentransfer === 'Perlu Perawatan Lebih Lanjut' ? true : false} value="Perlu Perawatan Lebih Lanjut">Perlu Perawatan Lebih Lanjut</Radio>
          <Radio name="alasan_mentransfer" checked={alasan_mentransfer === 'Permintaan Pasien atau Keluarga' ? true : false} value="Permintaan Pasien atau Keluarga">Permintaan Pasien atau Keluarga</Radio>
          <Radio name="alasan_mentransfer" checked={alasan_mentransfer === 'Lain-Lain' ? true : false} value="Lain-Lain">Lain-Lain</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Level Transfer:</Label>
        <div class="flex flex-wrap gap-2">
          <Radio name="level_transfer" checked={level_transfer === 'Level 0' ? true : false} value="Level 0">Level 0</Radio>
          <Radio name="level_transfer" checked={level_transfer === 'Level 0,5' ? true : false} value="Level 0,5">Level 0,5</Radio>
          <Radio name="level_transfer" checked={level_transfer === 'Level 1' ? true : false} value="Level 1">Level 1</Radio>
          <Radio name="level_transfer" checked={level_transfer === 'Level 2' ? true : false} value="Level 2">Level 2</Radio>
          <Radio name="level_transfer" checked={level_transfer === 'Level 3' ? true : false} value="Level 3">Level 3</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Indikasi Dirawat:</Label>
        <Textarea id="" placeholder="" name="indikasi_dirawat" bind:value={indikasi_dirawat}/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Diagnosa Medis:</Label>
        <Textarea id="" placeholder="" name="diagnosa_medis" bind:value={diagnosa_medis}/>
      </div>
    </div>
  </form>
</main>