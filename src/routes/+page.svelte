<script>
  import Icon from '@iconify/svelte';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import Footer from './Footer.svelte';
</script>


<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem home>Dashboard</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-2 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <h5 class="py-4 text-2xl font-semibold">Pasien Rawat Inap</h5>
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">0</span>
            <span class="block text-md text-gray-500">Kamar Kelas VVIP</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">1</span>
            <span class="block text-md text-gray-500">Kamar Kelas VIP</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-pink-600 bg-pink-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">0</span>
            <span class="block text-md text-gray-500">Kamar Kelas 3</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-sky-600 bg-sky-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">1</span>
            <span class="block text-md text-gray-500">Kamar Kelas 2</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-fuchsia-600 bg-fuchsia-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">0</span>
            <span class="block text-md text-gray-500">Kamar Kelas 1</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-rose-600 bg-rose-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">1</span>
            <span class="block text-md text-gray-500">Kamar Khusus Anak</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-indigo-600 bg-indigo-100 rounded-full mr-6">
            <Icon icon="mdi:guest-room" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">0</span>
            <span class="block text-md text-gray-500">Kamar Obstetri</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 p-4 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <Icon icon="healthicons:outpatient" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">189</span>
            <span class="block text-lg text-gray-500">Pasien</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <Icon icon="fa6-solid:user-doctor" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">45</span>
            <span class="block text-lg text-gray-500">Dokter</span>
          </div>
        </div>
        <div class="p-8 flex items-center bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-pink-600 bg-pink-100 rounded-full mr-6">
            <Icon icon="mdi:doctor" width="40" height="40" />
          </div>
          <div>
            <span class="block text-2xl font-semibold">10</span>
            <span class="block text-lg text-gray-500">Petugas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>