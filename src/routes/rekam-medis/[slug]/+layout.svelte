<script>
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores'; 
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import MenuDrawer from './MenuDrawer.svelte';
  import JsBarcode from 'jsbarcode';

  const no_rm = $page.params.slug;

  let barcode;
  const defaultOptions = {
    format: 'CODE128',
    height: 30,
    displayValue: false,
    background: 'rgb(249 250 251)',
    lineColor: '#000000',
  };
  onMount(async () => {
    await tick();
    JsBarcode(barcode, "1910391301", defaultOptions);
  });
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/rekam-medis">Rekam Medis</BreadcrumbItem>
    <BreadcrumbItem href="/rekam-medis/{no_rm}">Dokumen Pasien</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <div>
        <p class="font-semibold text-2xl">Dokumen Rekam Medis Rawat Inap</p>
        <MenuDrawer no_rm={no_rm}/>
      </div>
      <div class="p-4 border border-gray-300 w-max">
        <div class="flex justify-between gap-6">
          <p class="font-bold text-xs">No. RM: {no_rm}</p>
          <p class="font-bold text-xs uppercase">Jon Snow <span>(L)</span></p>
        </div>
        <div class="flex justify-between gap-6">
          <p class="font-bold text-xs">Tgl. Lahir: 02/06/2000</p>
          <p class="font-bold text-xs">23th</p>
        </div>
        <p class="font-bold text-xs">Jln. Mayjend Pandjaitan No. 22 Malang</p>
        <canvas class="w-full" bind:this={barcode}></canvas>
      </div>
    </div>
    <hr class="my-2">
    <slot/>
  </section>
</div>