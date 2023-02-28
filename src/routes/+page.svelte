<script>
  import Icon from '@iconify/svelte';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>


<div class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem home>Dashboard</BreadcrumbItem>
  </Breadcrumb>
  <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    <div class="flex items-center p-8 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
        <Icon icon="carbon:face-mask" width="40" height="40" />
      </div>
      <div>
        <span class="block text-2xl font-bold">62+</span>
        <span class="block text-gray-500">Patient</span>
      </div>
    </div>
    <div class="flex items-center p-8 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
        <Icon icon="carbon:analytics-custom" width="40" height="40" />
      </div>
      <div>
        <span class="block text-2xl font-bold">50+</span>
        <span class="block text-gray-500">Medical Records</span>
      </div>
    </div>
  </section>
</div>