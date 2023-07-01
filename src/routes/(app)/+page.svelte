<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import FooterComponent from "./FooterComponent.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  const user_data = data?.user_data;
  const dashboard = data?.dashboard;
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem home>Dashboard</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-2 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="grid grid-cols-2 gap-4">
        <div
          class="col-span-2 lg:col-span-1 p-8 bg-white shadow rounded-lg flex justify-center"
        >
          {#if user_data?.role === "Perawat"}
            <lottie-player
              id="lottie-image"
              src="https://assets10.lottiefiles.com/packages/lf20_olluraqu.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          {:else if user_data?.role === "Apoteker"}
            <lottie-player
              id="lottie-image"
              src="https://assets1.lottiefiles.com/packages/lf20_dgw6g3d8.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          {:else}
            <lottie-player
              id="lottie-image"
              src="https://assets1.lottiefiles.com/packages/lf20_u1vbg6qk.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
          {/if}
        </div>
        <div
          class="col-span-2 lg:col-span-1 bg-white grid grid-cols-2 md:grid-cols-3 shadow rounded-lg"
        >
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-orange-600 bg-orange-100 rounded-full mr-6"
            >
              <Icon icon="healthicons:outpatient" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.pasien}</span>
              <span class="block text-lg text-gray-500">Pasien</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6"
            >
              <Icon icon="fa6-solid:user-doctor" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.dokter}</span>
              <span class="block text-lg text-gray-500">Dokter</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-lime-600 bg-lime-100 rounded-full mr-6"
            >
              <Icon icon="mdi:doctor" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.petugas}</span>
              <span class="block text-lg text-gray-500">Petugas</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6"
            >
              <Icon icon="medical-icon:i-inpatient" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.pasien_inap}</span>
              <span class="block text-md text-gray-500">Pasien Inap</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6"
            >
              <Icon icon="mdi:bed-empty" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.kamar}</span>
              <span class="block text-md text-gray-500">Kamar</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6"
            >
              <Icon icon="game-icons:medicines" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.obat}</span>
              <span class="block text-md text-gray-500">Obat</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-pink-600 bg-pink-100 rounded-full mr-6"
            >
              <Icon icon="mdi:payment-clock" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.transaksi}</span>
              <span class="block text-md text-gray-500">Transaksi</span>
            </div>
          </div>
          <div class="p-2 lg:p-8 flex items-center">
            <div
              class="hidden sm:inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-rose-600 bg-rose-100 rounded-full mr-6"
            >
              <Icon icon="mdi:file-cabinet" width="40" height="40" />
            </div>
            <div>
              <span class="block text-2xl font-semibold">{dashboard.dokumen}</span>
              <span class="block text-md text-gray-500">DRM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</div>

<style>
  #lottie-image {
    height: 300px;
  }
  @media (max-width: 768px) {
    #lottie-image {
      height: 150px;
    }
  }
</style>
