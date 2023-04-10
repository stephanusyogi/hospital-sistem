<script>

  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold mb-2">National Early Warning Score (NEWS)</p>
      <div>
        <Button size="xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 14q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm4 0q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm4 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"/></svg>
          Tampilkan Berdasarkan Tanggal</Button>
        <Dropdown>
          <DropdownItem class="flex items-center gap-2">
            All
          </DropdownItem>
          <DropdownItem class="flex items-center gap-2">
            Minggu, 9 April 2023
          </DropdownItem>
          <DropdownItem class="flex items-center gap-2">
            Senin, 10 April 2023
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
    <Button href="news/update" color="green">
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
        <div class="grid grid-cols-4 gap-6 py-2">
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
          <div class="col-span-4 border p-2">
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
        <div class="grid grid-cols-4 gap-6 py-2">
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
          <div class="col-span-4 border p-2">
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