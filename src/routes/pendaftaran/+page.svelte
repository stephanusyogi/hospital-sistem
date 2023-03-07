<script>

  import { Breadcrumb, BreadcrumbItem, TabItem, Tabs } from "flowbite-svelte";
  import PasienBaru from "./PasienBaru.svelte";
  import PasienLama from "./PasienLama.svelte";
  
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pendaftaran Pasien</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <Tabs style="pill">
        <TabItem open>
          <span slot="title">Pasien Lama</span>
          <PasienLama/>
        </TabItem>
        <TabItem>
          <span slot="title">Pasien Baru</span>
          <PasienBaru/>
        </TabItem>
      </Tabs>
    </div>
  </section>
</div>