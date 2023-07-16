<script>

  import { Button, Input, Label, Select, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, Tabs } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";
  import { goto } from '$app/navigation';
  import { onMount } from "svelte";

  export let data
  export let form

  const no_rm = $page.params.slug;

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Update NEWS Score?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Update',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    })
  }
  
  let selected_rr
  let rr = [
    {value:"≥25", name: "≥25"},
    {value:"21-24", name: "12-20"},
    {value:"9-11", name: "9-11"},
    {value:"≤8", name: "≤8"},
  ]

  let selected_spo2
  let spo2 = [
    {value:"≥96", name: "≥96"},
    {value:"94-95", name: "94-95"},
    {value:"92-93", name: "92-93"},
    {value:"≤91", name: "≤91"},
  ]

  let selected_suhu
  let suhu = [
    {value:"≥39", name: "≥39"},
    {value:"38", name: "38"},
    {value:"37", name: "37"},
    {value:"36", name: "36"},
    {value:"≤35", name: "≤35"},
  ]

  let selected_tekanan_darah
  let tekananDarah = [
    {value:"230", name: "230"},
    {value:"220", name: "220"},
    {value:"210", name: "210"},
    {value:"200", name: "200"},
    {value:"190", name: "190"},
    {value:"180", name: "180"},
    {value:"170", name: "170"},
    {value:"160", name: "160"},
    {value:"150", name: "150"},
    {value:"140", name: "140"},
    {value:"130", name: "130"},
    {value:"120", name: "120"},
    {value:"110", name: "110"},
    {value:"100", name: "100"},
    {value:"90", name: "90"},
    {value:"80", name: "80"},
    {value:"70", name: "70"},
    {value:"60", name: "60"},
    {value:"50", name: "50"},
    {value:"40", name: "40"},
    {value:"30", name: "30"},
    {value:"20", name: "20"},
    {value:"10", name: "10"},
  ]

  let selected_nadi
  let nadi = [
    {value:"140", name: "140"},
    {value:"130", name: "130"},
    {value:"120", name: "120"},
    {value:"110", name: "110"},
    {value:"100", name: "100"},
    {value:"90", name: "90"},
    {value:"80", name: "80"},
    {value:"70", name: "70"},
    {value:"60", name: "60"},
    {value:"50", name: "50"},
    {value:"40", name: "40"},
    {value:"30", name: "30"},
    {value:"20", name: "20"},
    {value:"10", name: "10"},
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
    if(data?.news){
      selected_rr = data.news.rr
      selected_spo2 = data.news.spo2
      selected_suhu = data.news.suhu
      selected_tekanan_darah = data.news.tekanan_darah
      selected_nadi = data.news.nadi
    }
  })
</script>

<main>
  <form id="form" on:submit|preventDefault={()=>handleSubmit(no_rm)} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">NEWS Score</p>
      </div>
      <Button type="submit" color="green" size="sm">
        Simpan</Button>
    </div>
    <hr class="my-5">
    <div class="overflow-y-auto max-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div class="p-2">
          <div class="mb-2">
            <Label>RR
              <Select class="mt-2 w-full" items={rr} name="rr" bind:value={selected_rr}/>
            </Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" name="rr_score" bind:value={data.news.rr_score}/>
          </div>
        </div> 
        <div class="p-2">
          <div class="mb-2">
            <Label>SpO2
              <Select class="mt-2 w-full" items={spo2} name="spo2" bind:value={selected_spo2}/>
            </Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" name="spo2_score" bind:value={data.news.spo2_score}/>
          </div>
        </div> 
        <div class="p-2">
          <div class="mb-2">
            <Label>Alat Bantu O2</Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" name="alat_bantu_o2_score" bind:value={data.news.alat_bantu_o2_score}/>
          </div>
        </div>  
        <div class="p-2">
          <div class="mb-2">
            <Label>Suhu
              <Select class="mt-2 w-full" items={suhu} name="suhu" bind:value={selected_suhu}/>
            </Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" name="suhu_score" bind:value={data.news.suhu_score}/>
          </div>
        </div>  
        <div class="p-2">
          <div class="mb-2">
            <Label>Tekanan Darah
              <Select class="mt-2 w-full" items={tekananDarah} name="tekanan_darah" bind:value={selected_tekanan_darah}/>
            </Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" name="tekanan_darah_score" bind:value={data.news.tekanan_darah_score}/>
          </div>
        </div>  
        <div class="p-2">
          <div class="mb-2">
            <Label>Nadi
              <Select class="mt-2 w-full" items={nadi} name="nadi" bind:value={selected_nadi}/>
            </Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" required  name="nadi_score" bind:value={data.news.nadi_score}/>
          </div>
        </div>
        <div class="p-2">
          <div class="mb-2">
            <Label>Tingkat Kesadaran</Label>
          </div>
          <div>
            <Label for="" class="mb-2">Sadar</Label>
            <Input type="text" id="" placeholder="" required  name="tingkat_kesadaran_sadar" bind:value={data.news.tingkat_kesadaran_sadar}/>
          </div>
          <div>
            <Label for="" class="mb-2">V/P/U</Label>
            <Input type="text" id="" placeholder="" required  name="tingkat_kesadaran_vpu" bind:value={data.news.tingkat_kesadaran_vpu}/>
          </div>
        </div>  
        <div class="p-2">
          <div class="mb-2">
            <Label>Kadar Gula Darah</Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" required  name="kadar_gula_darah_score" bind:value={data.news.kadar_gula_darah_score}/>
          </div>
        </div>  
        <div class="p-2">
          <div class="mb-2">
            <Label>Total NEWS Score</Label>
          </div>
          <div>
            <Label for="" class="mb-2">Score</Label>
            <Input type="text" id="" placeholder="" required  name="total_news_score" bind:value={data.news.total_news_score}/>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>