<script>

  import { Button, Dropdown, DropdownItem, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import InputOutput from "./InputOutput.svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.19 Observasi Cairan</p>
    </div>
    <Button href="observasi-cairan/update" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Update</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Minggu, 9 April 2023</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-2">
          <InputOutput jam="01.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="02.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="03.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="04.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="05.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="06.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-2">
          <InputOutput jam="07.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="08.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="09.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="10.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="11.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="12.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="13.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="14.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="15.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="16.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="17.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="18.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="19.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="20.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="21.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="22.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="23.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="24.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
      </div>
      <div class="border p-4 mb-2">
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold italic">Senin, 10 April 2023</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-2">
          <InputOutput jam="01.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="02.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="03.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="04.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="05.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="06.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-2">
          <InputOutput jam="07.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="08.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="09.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="10.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="11.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="12.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="13.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="14.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="15.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="16.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="17.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="18.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <InputOutput jam="19.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="20.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="21.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="22.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="23.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
          <InputOutput jam="24.00" jenis_input="Infus" jumlah_input="2000 cc" jenis_output="Urin" jumlah_output="200 cc"/>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-4 text-sm bg-white border-slate-300">
          <p class="text-md font-medium">Balance, Input-(Output+IWL)</p>
          <p class="text-sm sm:text-md font-light sm:text-right">1300 cc/24 jam</p>
        </div>
      </div>
    </div>
  </div>
</main>