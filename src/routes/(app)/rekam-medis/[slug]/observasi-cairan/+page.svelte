<script>

  import { Button, Dropdown, DropdownItem, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import InputOutput from "./InputOutput.svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold mb-2">Form 12.19 Observasi Cairan</p>
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
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-2">
          <InputOutput jam="01.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="02.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="03.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="04.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="05.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="06.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-2">
          <InputOutput jam="07.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="08.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="09.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="10.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="11.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="12.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="13.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="14.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="15.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="16.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="17.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="18.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="19.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="20.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="21.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="22.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="23.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="24.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
      </div>
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Senin, 10 April 2023</p>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="01.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="02.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="03.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="04.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="05.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="06.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="07.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="08.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="09.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="10.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="11.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="12.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="13.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="14.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="15.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="16.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="17.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="18.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="19.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="20.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="21.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="22.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="23.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="24.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-md font-light text-right">1300 cc/24 jam</p>
        </div>
      </div>
    </div>
  </div>
</main>