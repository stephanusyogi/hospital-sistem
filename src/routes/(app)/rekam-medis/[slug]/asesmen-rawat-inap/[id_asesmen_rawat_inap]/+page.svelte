<script>

  import { Accordion, AccordionItem, Button, ButtonGroup, Checkbox, Input, InputAddon, Label, Radio, TabItem, Tabs, Textarea } from "flowbite-svelte";
  import { page } from '$app/stores';
  import Swal from 'sweetalert2';
  import { onMount } from "svelte";

  export let data
  export let form

  const no_rm = $page.params.slug;

  let diagnosaPerawat = [];
	function addDiagnosaPerawat() {
		diagnosaPerawat = [
			...diagnosaPerawat,
			{
				diagnosa_perawat: "",
			},
		];
	}

	function deleteDiagnosaPerawat(index) {
		diagnosaPerawat = diagnosaPerawat.filter((_, i) => i !== index);
	}
  
  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Asesmen Rawat Inap?',
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
  
  let diagnosa_masuk
  let keluhan_utama
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.asesmen_medis_rawat_inap.length !== 0){
      diagnosa_masuk = data.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk
      keluhan_utama = data.asesmen_medis_rawat_inap.status_fisik_riwayat[0].keluhan_utama
      diagnosaPerawat = data.asesmen_medis_rawat_inap.diagnosa_keperawatan
    }
  })
</script>

<main>
  <form id="form" on:submit|preventDefault={()=>handleSubmit(no_rm)} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.31 Asesmen Rawat Inap</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <p class="text-lg font-semibold italic">Status Fisik Dan Riwayat</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="keluhan_utama" class="mb-2"
          >Diagnosa Masuk: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="diagnosa_masuk"
          rows="2"
          placeholder="Masukkan diagnosa masuk"
          name="diagnosa_masuk"
          bind:value={diagnosa_masuk}
        />
      </div>
      <div class="my-2">
        <Label for="keluhan_utama" class="mb-2"
          >Keluhan Utama: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="keluhan_utama"
          rows="2"
          placeholder="Masukkan keluhan utama"
          name="keluhan_utama"
          bind:value={keluhan_utama}
        />
      </div>
    </div>
    <div class="flex items-center justify-between mb-2">
      <p class="text-lg font-semibold italic">Diagnosa Keperawatan</p>
      <Button size="sm" on:click={addDiagnosaPerawat}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="sm:mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah</span>
      </Button>
    </div>
    {#each diagnosaPerawat as tag, i}
      <div class="flex flex-wrap sm:flex-nowrap items-center gap-4 py-2">
        <div class="w-full">
          <Textarea rows="2" name="keterangan[]" placeholder="Masukan Diagnosa" bind:value={diagnosaPerawat[i].keterangan}/>
        </div>
        <Button on:click={() => deleteDiagnosaPerawat(i)} size="xs" color="red" class="w-full sm:w-24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
      </div>
    {/each}
  </form>
</main>