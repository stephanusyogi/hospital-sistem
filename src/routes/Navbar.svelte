<script>
  import { Navbar, NavBrand, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider,Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper,Drawer, CloseButton} from 'flowbite-svelte'
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { sineIn } from 'svelte/easing';

  import userIcon from '$lib/images/user.png';

  let hidden1 = true; 
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  
  $: activeUrl = $page.url.pathname
</script>

<Navbar navClass="absolute z-40 px-2 sm:px-4 py-3 w-full border-b drop-shadow-md">
  <NavHamburger class="block md:hidden" on:click={() => (hidden1 = false)}/>
  <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1'>
    <div class='flex items-end'>
      <CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/>
    </div>
    <Sidebar>
      <SidebarWrapper divClass="overflow-y-auto min-h-screen py-4 px-3 bg-white rounded dark:bg-gray-800">
        <SidebarGroup>
          <!-- List Menu -->
          <SidebarItem label="Dashboard" on:click={() => (hidden1 = true)} active={activeUrl === '/'}>
            <svelte:fragment slot="icon">
              <Icon icon="carbon:meter" width="35" height="35"/>
            </svelte:fragment>
          </SidebarItem>
          <SidebarDropdownWrapper label="Pendaftaran" >
            <svelte:fragment slot="icon">
              <Icon icon="mdi:file-sign" width="35" height="35"/>
            </svelte:fragment>
            <SidebarDropdownItem href="/pendaftaran" label="Rawat Inap" active={activeUrl === '/pendaftaran'} on:click={() => (hidden1 = true)}/>
          </SidebarDropdownWrapper>
          <SidebarItem label="Ruangan" on:click={() => (hidden1 = true)} active={activeUrl === '/ruangan'}>
            <svelte:fragment slot="icon">
              <Icon icon="fluent:conference-room-24-filled" width="35" height="35"/>
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Obat" on:click={() => (hidden1 = true)} active={activeUrl === '/obat'}>
            <svelte:fragment slot="icon">
              <Icon icon="game-icons:medicines" width="35" height="35"/>
            </svelte:fragment>
          </SidebarItem>
          <SidebarDropdownWrapper label="Rekam Medis" >
            <svelte:fragment slot="icon">
              <Icon icon="ri:contacts-book-fill" width="35" height="35"/>
            </svelte:fragment>
            <SidebarDropdownItem href="/rekam-medis" label="Rawat Inap" active={activeUrl === '/rekam-medis'} on:click={() => (hidden1 = true)}/>
          </SidebarDropdownWrapper>
          <SidebarItem label="Transaksi" on:click={() => (hidden1 = true)} active={activeUrl === '/transaksi'}>
            <svelte:fragment slot="icon">
              <Icon icon="fluent:money-hand-20-filled" width="35" height="35"/>
            </svelte:fragment>
          </SidebarItem>
          <SidebarDropdownWrapper label="User Management" >
            <svelte:fragment slot="icon">
              <Icon icon="carbon:events" width="35" height="35"/>
            </svelte:fragment>
            <SidebarDropdownItem href="/users/dokter" label="Dokter" active={activeUrl === '/users/dokter'} on:click={() => (hidden1 = true)}/>
            <SidebarDropdownItem href="/users/pasien" label="Pasien" active={activeUrl === '/users/pasien'} on:click={() => (hidden1 = true)}/>
            <SidebarDropdownItem href="/users/petugas" label="Petugas" active={activeUrl === '/users/petugas'} on:click={() => (hidden1 = true)}/>
          </SidebarDropdownWrapper>
        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
  </Drawer>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-md lg:text-lg xl:text-xl font-semibold dark:text-white">Selamat Datang, Stephanus!</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src={userIcon} />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
    <span class="block text-sm"> Stephanus Yogi </span>
    <span class="block truncate text-sm font-medium"> Petugas </span>
    </DropdownHeader>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</Navbar>