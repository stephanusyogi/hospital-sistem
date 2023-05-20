<script>

  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold mb-2">National Early Warning Score (NEWS)</p>
    </div>
    <Button href="news/update" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg>
      Tambah</Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Minggu, 9 April 2023</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 py-2">
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">RR</p>
              <p class="font-light text-right">21-24</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">SpO2</p>
              <p class="font-light text-right">92-93</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Alat Bantu O2</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Suhu</p>
              <p class="font-light text-right">38</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Tekanan Darah</p>
              <p class="font-light text-right">120</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Nadi</p>
              <p class="font-light text-right">100</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Tingkat Kesadaran</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Sadar</p>
              <p class="font-light text-right">0</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">V/P/U</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Kadar Gula Darah</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="col-span-2 lg:col-span-4 border p-2">
            <div class="flex justify-between">
              <p class="font-medium">TOTAL NEW SCORE</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
        </div>
      </div>
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Senin, 10 April 2023</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 py-2">
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">RR</p>
              <p class="font-light text-right">21-24</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">SpO2</p>
              <p class="font-light text-right">92-93</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Alat Bantu O2</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Suhu</p>
              <p class="font-light text-right">38</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Tekanan Darah</p>
              <p class="font-light text-right">120</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Nadi</p>
              <p class="font-light text-right">100</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Tingkat Kesadaran</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Sadar</p>
              <p class="font-light text-right">0</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">V/P/U</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex justify-between">
              <p class="font-medium">Kadar Gula Darah</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
          <div class="col-span-2 lg:col-span-4 border p-2">
            <div class="flex justify-between">
              <p class="font-medium">TOTAL NEW SCORE</p>
              <p class="font-light text-right">0</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</main>