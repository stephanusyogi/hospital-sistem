<script>
  import { Navbar, NavBrand, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider,Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper,Drawer, CloseButton} from 'flowbite-svelte'
  import Icon from '@iconify/svelte';

  import { sineIn } from 'svelte/easing';

  import userIcon from '$lib/images/user.png';

  let hidden1 = true; 
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<Navbar navClass="absolute px-2 sm:px-4 py-3 w-full border-b">
  <NavHamburger class="block md:hidden" on:click={() => (hidden1 = false)}/>
  <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1'>
    <div class='flex items-end'>
      <CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/>
    </div>
    <Sidebar>
      <SidebarWrapper divClass="overflow-y-auto min-h-screen py-4 px-3 bg-white rounded dark:bg-gray-800">
        <SidebarGroup>
          <!-- List Menu -->
          <SidebarItem label="Dashboard" on:click={() => (hidden1 = true)}>
            <svelte:fragment slot="icon">
              <Icon icon="carbon:meter" width="35" height="35"/>
            </svelte:fragment>
          </SidebarItem>
          <SidebarDropdownWrapper label="Formulir Rekam Medis" >
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
              <Icon icon="carbon:events" width="35" height="35"/>
            </svelte:fragment>
            <SidebarDropdownItem href="/users/dokter" label="Dokter" on:click={() => (hidden1 = true)}/>
            <SidebarDropdownItem href="/users/pasien" label="Pasien" on:click={() => (hidden1 = true)}/>
            <SidebarDropdownItem href="/users/staff" label="Staff" on:click={() => (hidden1 = true)}/>
          </SidebarDropdownWrapper>
  
        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
  </Drawer>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-md lg:text-lg xl:text-xl font-semibold dark:text-white">Welcome, Stephanus!</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src={userIcon} />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
    <span class="block text-sm"> Stephanus Yogi </span>
    <span class="block truncate text-sm font-medium"> Staff </span>
    </DropdownHeader>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</Navbar>