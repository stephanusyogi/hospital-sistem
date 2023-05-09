<script>

  import { Button, Dropdown, DropdownItem, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import InputOutput from "./InputOutput.svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold mb-2">Observasi Cairan</p>
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
    <Button href="observasi-cairan/update" color="green">
      Update</Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Minggu, 9 April 2023</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="01.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="02.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="03.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="04.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="05.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="06.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="07.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="08.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="09.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="10.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="11.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="12.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="13.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="14.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="15.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="16.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="17.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="18.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="19.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="20.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="21.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="22.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="23.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="24.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
      </div>
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Senin, 10 April 2023</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="01.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="02.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="03.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="04.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="05.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="06.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="07.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="08.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="09.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="10.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="11.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="12.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="13.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="14.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="15.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="16.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="17.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="18.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-6 gap-6 py-2">
          <InputOutput jam="19.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="20.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="21.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="22.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="23.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="24.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
      </div>
    </div>
  </div>
</main>