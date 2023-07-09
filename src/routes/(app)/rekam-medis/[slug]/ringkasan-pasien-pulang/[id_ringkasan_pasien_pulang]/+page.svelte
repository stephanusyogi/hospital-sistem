<script>

  import { Accordion, AccordionItem, Button, ButtonGroup, Input, InputAddon, Label, Search, Select, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let data
  export let form
  
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
        const form = document.getElementById('form');
        form.submit()
      }
    })
  }

  let selected_cara_pulang
  let cara_pulang = [
    {value:"Ijin", name: "Ijin"},
    {value:"Rujuk Rumah Sakit", name: "Rujuk Rumah Sakit"},
    {value:"Atas Permintaan Pasien", name: "Atas Permintaan Pasien"},
  ]
  
  let selected_keadaan_pulang
  let keadaan_pulang = [
    {value:"Sembuh", name: "Sembuh"},
    {value:"Perbaikan", name: "Perbaikan"},
    {value:"Tak Sembuh", name: "Tak Sembuh"},
    {value:"Meninggal (</>48 Jam)", name: "Meninggal (</>48 Jam)"},
  ]

  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.ringkasan_pasien_pulang){
      selected_cara_pulang = data.ringkasan_pasien_pulang.cara_pulang
      selected_keadaan_pulang = data.ringkasan_pasien_pulang.keadaan_pulang
    }
  })
</script>

<main>
  <form id="form" on:submit|preventDefault={()=>handleSubmit(no_rm)} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Ringkasan Pasien Pulang</p>
      </div>
      <Button type="submit" color="green" size="sm">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <div class="my-2">
      <Label for="" class="mb-2">Keadaan Umum/GCS: <span class="text-sm text-red-500 italic">*</span></Label>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <span>Tensi:</span>
          <ButtonGroup class="w-full sm:col-span-2" size="md">
            <Input id="input-addon-md" type="text" name="keadaan_umum_t" size="sm" bind:value={data.ringkasan_pasien_pulang.keadaan_umum_t}/>
            <InputAddon>mmHg</InputAddon>
          </ButtonGroup>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <span>Nadi:</span>
          <ButtonGroup class="w-full sm:col-span-2" size="md">
            <Input id="input-addon-md" type="text" name="keadaan_umum_n" size="sm" bind:value={data.ringkasan_pasien_pulang.keadaan_umum_n}/>
            <InputAddon>x/mnt</InputAddon>
          </ButtonGroup>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <span>RR:</span>
          <ButtonGroup class="w-full sm:col-span-2" size="md">
            <Input id="input-addon-md" type="text" name="keadaan_umum_rr" size="sm" bind:value={data.ringkasan_pasien_pulang.keadaan_umum_rr}/>
            <InputAddon>x/mnt</InputAddon>
          </ButtonGroup>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <span>Suhu:</span>
          <ButtonGroup class="w-full sm:col-span-2" size="md">
            <Input id="input-addon-md" type="text" name="keadaan_umum_s" size="sm" bind:value={data.ringkasan_pasien_pulang.keadaan_umum_s}/>
            <InputAddon>°C</InputAddon>
          </ButtonGroup>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <span>SpO2:</span>
          <ButtonGroup class="w-full sm:col-span-2" size="md">
            <Input id="input-addon-md" type="text" name="keadaan_umum_spo2" size="sm" bind:value={data.ringkasan_pasien_pulang.keadaan_umum_spo2}/>
            <InputAddon>%</InputAddon>
          </ButtonGroup>
        </div>
      </div>
    </div>
    <div class="my-2">
      <Label>Cara Pulang:
        <Select class="mt-2" name="cara_pulang" items={cara_pulang} bind:value={selected_cara_pulang}/>
      </Label>
    </div>
    <div class="my-2">
      <Label>Keadaan Pulang:
        <Select class="mt-2" name="keadaan_pulang" items={keadaan_pulang} bind:value={selected_keadaan_pulang}/>
      </Label>
    </div>
  </form>
</main>