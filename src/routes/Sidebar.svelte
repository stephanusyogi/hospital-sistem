<script>
  import { SidebarBrand,Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper} from 'flowbite-svelte'
  import Icon from '@iconify/svelte';

  import logo from '$lib/images/logo-icon-tab.png';

  import { page } from '$app/stores';

  let spanClass = 'self-center font-semibold whitespace-nowrap dark:text-white text-lg xl:text-xl';
  let site = {
    name: 'RSIA-Hospital Sistem',
    href: '/',
    img: logo
  };

  $: activeUrl = $page.url.pathname
</script>
<Sidebar asideClass="w-80 hidden md:block">
  <SidebarWrapper divClass="overflow-y-auto min-h-screen py-4 px-3 bg-white rounded dark:bg-gray-800">
    <SidebarGroup>
      <SidebarBrand class="text-gray-700 text-md lg:text-lg xl:text-xl" {site} {spanClass}/>
      <!-- List Menu -->
      <div class="border-t pt-5">
        <SidebarItem label="Dashboard" href='/' active={activeUrl === '/'}>
          <svelte:fragment slot="icon">
            <Icon icon="carbon:meter" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <SidebarDropdownWrapper ulClass="overflow-y-auto h-60" label="Formulir Rekam Medis" >
          <svelte:fragment slot="icon">
            <Icon icon="ep:files" width="32" height="32" />
          </svelte:fragment>
          <SidebarDropdownItem href="/forms/asesmen-rawat-inap" label="Asesmen Rawat Inap" />
          <SidebarDropdownItem href="/forms/asesmen-medis-awal" label="Asesmen Medis Awal" />
          <SidebarDropdownItem href="/forms/transfer-pasien-internal" label="Transfer Pasien Internal" />
          <SidebarDropdownItem href="/forms/daftar-dokter-penanggungjawab-pasien" label="Daftar DPJP" />
          <SidebarDropdownItem href="/" label="Rekonsiliasi" />
          <SidebarDropdownItem href="/" label="Edukasi Pasien & Keluarga Terintegrasi" />
          <SidebarDropdownItem href="/" label="Observasi Cairan" />
          <SidebarDropdownItem href="/" label="Hasil Pemeriksaan Penunjang & Tempelan" />
          <SidebarDropdownItem href="/" label="Tempelan Kopi Resep" />
          <SidebarDropdownItem href="/forms/catatan-perkembangan-pasien-terintegrasi" label="Catatan Perkembangan Pasien Terintegrasi" />
          <SidebarDropdownItem href="/" label="Pemberian Obat Pasien" />
          <SidebarDropdownItem href="/" label="NEWS" />
          <SidebarDropdownItem href="/" label="Ringkasan Pasien Pulang" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper label="User Management" >
          <svelte:fragment slot="icon">
            <Icon icon="carbon:events" width="32" height="32"/>
          </svelte:fragment>
          <SidebarDropdownItem href="/users/dokter" label="Dokter" />
          <SidebarDropdownItem href="/users/pasien" label="Pasien" />
          <SidebarDropdownItem href="/users/staff" label="Staff" />
        </SidebarDropdownWrapper>
      </div>

    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>