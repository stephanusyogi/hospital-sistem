<script>
  import { SidebarBrand,Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper} from 'flowbite-svelte'
  import Icon from '@iconify/svelte';

  import logo from '$lib/images/logo-icon-tab.png';

  import { page } from '$app/stores';
  let aClass = "my-2 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
  let btnClass = "my-2 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
  let site = {
    name: 'RSIA-Hospital Sistem',
    href: '/',
    img: logo
  };
  let openSideBar = false
  $: activeUrl = $page.url.pathname
</script>
<Sidebar asideClass="{openSideBar ? 'w-80' : 'w-24'} relative hidden md:block transition-width transition-slowest ease bg-gray-50 rounded dark:bg-gray-800">
  <SidebarWrapper divClass="py-3 px-4 bg-white rounded dark:bg-gray-800  drop-shadow-md border-r border-gray-100">
    <SidebarBrand class="text-gray-700 text-md lg:text-lg xl:text-xl" aClass="flex items-center justify-center" imgClass="{openSideBar ? 'mr-3' : ''} h-6 sm:h-10" {site} spanClass="{openSideBar ? '' : 'hidden'} self-center font-semibold whitespace-nowrap dark:text-white text-lg xl:text-xl"/>
  </SidebarWrapper>
  <SidebarWrapper divClass="mt-5 overflow-y-auto max-h-screen pb-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    <SidebarGroup ulClass="space-y-2">
      <!-- List Menu -->
      <div class="" on:mouseenter={()=>{openSideBar = true}} on:mouseleave={()=>{openSideBar ? openSideBar = true : openSideBar = false}}>
        <SidebarItem class="{!openSideBar ? 'justify-center' : ''}" {aClass} label="Dashboard" href='/' active={activeUrl === '/'} spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="carbon:meter" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <hr class="my-1">
        <SidebarItem class="{!openSideBar ? 'justify-center' : ''}" {aClass} label="Pendaftaran" href='/pendaftaran' active={activeUrl === '/pendaftaran'} spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="mdi:file-sign" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <hr class="my-1">
        <SidebarItem class="{!openSideBar ? 'justify-center' : ''}" {aClass} label="Rekam Medis" href='/rekam-medis' active={activeUrl === '/rekam-medis'} spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="ri:contacts-book-fill" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <hr class="my-1">
        <SidebarItem class="{!openSideBar ? 'justify-center' : ''}" {aClass} label="Daftar Transaksi" active={activeUrl === '/transaksi'} href='/transaksi' spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="fluent:money-hand-20-filled" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <hr class="my-1">
        <SidebarItem class="{!openSideBar ? 'justify-center' : ''}" {aClass} label="Ruangan" active={activeUrl === '/ruangan'} href='/ruangan' spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="fluent:conference-room-24-filled" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem class="{!openSideBar ? 'justify-center' : ''}" {aClass} label="Obat" href='/obat' active={activeUrl === '/obat'}  spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="game-icons:medicines" width="32" height="32"/>
          </svelte:fragment>
        </SidebarItem>
        <hr class="my-1">
        <SidebarDropdownWrapper {btnClass} isOpen={!openSideBar ? false  : false} label="Users Management" spanClass="{openSideBar ? 'ml-1 text-left' : 'hidden'}">
          <svelte:fragment slot="icon">
            <Icon icon="ph:users-four-bold" width="32" height="32"/>
          </svelte:fragment>
          <SidebarDropdownItem href="/users/pasien" label="Pasien" active={activeUrl === '/users/pasien'}/>
          <SidebarDropdownItem href="/users/dokter" label="Dokter" active={activeUrl === '/users/dokter'}/>
          <SidebarDropdownItem href="/users/petugas" label="Petugas" active={activeUrl === '/users/petugas'}/>
        </SidebarDropdownWrapper>
      </div>
    </SidebarGroup>
  </SidebarWrapper>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="cursor-pointer py-6 absolute top-[100px] -right-7 text-gray-700 z-40 bg-gray-50 rounded-br-lg rounded-tr-lg dark:bg-gray-800" on:click={()=>{openSideBar ? openSideBar = false : openSideBar = true}}>
    {#if openSideBar}
      <Icon icon="material-symbols:double-arrow-rounded" width="30" rotate={2} />
    {:else}
      <Icon icon="material-symbols:double-arrow-rounded" width="30" />
    {/if}
  </div>
</Sidebar>