<script>
  import { Button,  P,  TabItem,  Tabs } from "flowbite-svelte";
  import ObatResep from "./ObatResep.svelte";
  import ObatNonResep from "./ObatNonResep.svelte";
  
</script>
<main>
  <div class="flex items-center justify-between">
    <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37.1 Rekonsiliasi</p>
    <Button color="green" href="rekonsiliasi/tambah" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="25" height="25" viewBox="0 0 48 48"><mask id="ipSMedicineBottleOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M13 7a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6H16a3 3 0 0 1-3-3Zm.1 10.12A3 3 0 0 1 15.437 16h17.124a3 3 0 0 1 2.339 1.12l4.438 5.523a3 3 0 0 1 .661 1.88V41a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V24.523a3 3 0 0 1 .661-1.88l4.438-5.522Z"/><path stroke="#000" stroke-linecap="round" d="M18 30h12m-6-6v12"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMedicineBottleOne0)"/></svg><span class="hidden sm:block">Tambah Rekonsiliasi Obat</span></Button>
  </div>
  <hr class="my-5">
  <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem open title="Obat Resep" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <ObatResep/>
    </TabItem>
    <TabItem title="Obat Non Resep (Contoh: Produk OTC, Herbal, dll)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <ObatNonResep/>
    </TabItem>
  </Tabs>
</main>