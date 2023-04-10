<script>

  import { Button, Input, Label, Select, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, Tabs } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';

  const handleSubmit = () => {
    Swal.fire({
      title: 'Update NEWS Score?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Update',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'NEWS Score Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/news")
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
  
  let rr = [
    {value:"≥25", name: "≥25"},
    {value:"21-24", name: "12-20"},
    {value:"9-11", name: "9-11"},
    {value:"≤8", name: "≤8"},
  ]
  let spo2 = [
    {value:"≥96", name: "≥96"},
    {value:"94-95", name: "94-95"},
    {value:"92-93", name: "92-93"},
    {value:"≤91", name: "≤91"},
  ]
  let suhu = [
    {value:"≥39", name: "≥39"},
    {value:"38", name: "38"},
    {value:"37", name: "37"},
    {value:"36", name: "36"},
    {value:"≤35", name: "≤35"},
  ]
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
</script>

<main>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">NEWS Score</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" contentClass="bg-gray-50 rounded-lg dark:bg-gray-800 mt-4">
      <TabItem title="Minggu, 9 April 2023">
        <div class="overflow-y-auto max-h-screen">
          <div class="grid grid-cols-4 gap-6 text-sm">
            <div class="p-2">
              <div class="mb-2">
                <Label>RR
                  <Select class="mt-2 w-full" items={rr}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div> 
            <div class="p-2">
              <div class="mb-2">
                <Label>SpO2
                  <Select class="mt-2 w-full" items={spo2}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div> 
            <div class="p-2">
              <div class="mb-2">
                <Label>Alat Bantu O2</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Suhu
                  <Select class="mt-2 w-full" items={suhu}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Tekanan Darah
                  <Select class="mt-2 w-full" items={tekananDarah}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Nadi
                  <Select class="mt-2 w-full" items={nadi}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" required  />
              </div>
            </div>
            <div class="p-2">
              <div class="mb-2">
                <Label>Tingkat Kesadaran</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Sadar</Label>
                <Input type="text" id="" placeholder="" required  />
              </div>
              <div>
                <Label for="" class="mb-2">V/P/U</Label>
                <Input type="text" id="" placeholder="" required  />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Kadar Gula Darah</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" required  />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Total NEW Score</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" required  />
              </div>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem open title="Senin, 10 April 2023 (Hari Ini)">
        <div class="overflow-y-auto max-h-screen">
          <div class="grid grid-cols-4 gap-6 text-sm">
            <div class="p-2">
              <div class="mb-2">
                <Label>RR
                  <Select class="mt-2 w-full" items={rr}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div> 
            <div class="p-2">
              <div class="mb-2">
                <Label>SpO2
                  <Select class="mt-2 w-full" items={spo2}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div> 
            <div class="p-2">
              <div class="mb-2">
                <Label>Alat Bantu O2</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Suhu
                  <Select class="mt-2 w-full" items={suhu}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Tekanan Darah
                  <Select class="mt-2 w-full" items={tekananDarah}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Nadi
                  <Select class="mt-2 w-full" items={nadi}/>
                </Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>
            <div class="p-2">
              <div class="mb-2">
                <Label>Tingkat Kesadaran</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Sadar</Label>
                <Input type="text" id="" placeholder="" />
              </div>
              <div>
                <Label for="" class="mb-2">V/P/U</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Kadar Gula Darah</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>  
            <div class="p-2">
              <div class="mb-2">
                <Label>Total NEW Score</Label>
              </div>
              <div>
                <Label for="" class="mb-2">Score</Label>
                <Input type="text" id="" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </TabItem>
    </Tabs>
  </form>
</main>