<script>
  // import "../app.postcss";

  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { navigating } from "$app/stores";
  import { page } from "$app/stores";

  import { loading } from "../../components/PageLoader/PageLoader";
  import PageLoader from "../../components/PageLoader/PageLoader.svelte";
  import {
    CloseButton,
    Drawer,
    Sidebar,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
  import NavbarComponent from "./NavbarComponent.svelte";
  import SidebarComponent from "./SidebarComponent.svelte";

  $: loading.setNavigate(!!$navigating);

  let hidden2 = true;
  let transitionParams2 = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };

  $: activeUrl = $page.url.pathname;

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<svelte:head>
  <title>RSIA - Hospital Sistem</title>
</svelte:head>

{#if $loading.status === "NAVIGATING"}
  <PageLoader />
{/if}
<div class="flex bg-gray-100 min-h-screen">
  <SidebarComponent user_data={data?.user_data} />

  <div class="relative overflow-x-auto w-full bg-gray-100">
    <NavbarComponent user_data={data?.user_data} bind:hidden2 />
    <!-- Content -->
    <slot user_data={data?.user_data} />
  </div>

  <!-- Mobile Menu -->
  <Drawer
    transitionType="fly"
    {transitionParams2}
    bind:hidden={hidden2}
    id="sidebar2"
  >
    <div class="flex items-end">
      <CloseButton
        on:click={() => (hidden2 = true)}
        class="mb-4 dark:text-white"
      />
    </div>
    <Sidebar>
      <SidebarWrapper
        divClass="overflow-y-auto min-h-screen py-4 px-3 bg-white rounded dark:bg-gray-800"
      >
        {#if data?.user_data.role === "Perawat"}
          <SidebarGroup ulClass="space-y-2">
            <!-- List Menu -->
            <div>
              <SidebarItem
                href="/"
                label="Dashboard"
                on:click={() => (hidden2 = true)}
                active={activeUrl === "/"}
                class="text-sm"
              >
                <svelte:fragment slot="icon">
                  <Icon icon="carbon:meter" width="35" height="35" />
                </svelte:fragment>
              </SidebarItem>
              <hr class="my-1" />
              <SidebarDropdownWrapper label="Pendaftaran" class="text-sm">
                <svelte:fragment slot="icon">
                  <Icon icon="mdi:file-sign" width="32" height="32" />
                </svelte:fragment>
                <SidebarDropdownItem
                  class="text-sm"
                  href="/pendaftaran/loket-pasien"
                  label="Loket Pasien"
                  active={activeUrl === "/pendaftaran/loket-pasien"}
                  on:click={() => (hidden2 = true)}
                />
                <SidebarDropdownItem
                  class="text-sm"
                  href="/pendaftaran/admisi-rawat-inap"
                  label="Admisi Rawat Inap"
                  active={activeUrl === "/pendaftaran/admisi-rawat-inap"}
                  on:click={() => (hidden2 = true)}
                />
              </SidebarDropdownWrapper>
              <hr class="my-1" />
              <SidebarItem
                class="text-sm"
                label="Rekam Medis"
                href="/rekam-medis"
                active={activeUrl === "/rekam-medis"}
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="ri:contacts-book-fill" width="32" height="32" />
                </svelte:fragment>
              </SidebarItem>
              <hr class="my-1" />
              <SidebarItem
                class="text-sm"
                label="Transaksi"
                active={activeUrl === "/transaksi"}
                href="/transaksi"
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon
                    icon="fluent:money-hand-20-filled"
                    width="32"
                    height="32"
                  />
                </svelte:fragment>
              </SidebarItem>
              <hr class="my-1" />
              <SidebarItem
                class="text-sm"
                label="Ruangan"
                active={activeUrl === "/ruangan"}
                href="/ruangan"
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon
                    icon="fluent:conference-room-24-filled"
                    width="32"
                    height="32"
                  />
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem
                class="text-sm"
                label="Obat"
                href="/obat"
                active={activeUrl === "/obat"}
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="game-icons:medicines" width="32" height="32" />
                </svelte:fragment>
              </SidebarItem>
              <hr class="my-1" />
              <SidebarDropdownWrapper label="Users Management" class="text-sm">
                <svelte:fragment slot="icon">
                  <Icon icon="ph:users-four-bold" width="32" height="32" />
                </svelte:fragment>
                <SidebarDropdownItem
                  class="text-sm"
                  href="/users/pasien"
                  label="Pasien"
                  active={activeUrl === "/users/pasien"}
                  on:click={() => (hidden2 = true)}
                />
                <SidebarDropdownItem
                  class="text-sm"
                  href="/users/dokter"
                  label="Dokter"
                  active={activeUrl === "/users/dokter"}
                  on:click={() => (hidden2 = true)}
                />
                <SidebarDropdownItem
                  class="text-sm"
                  href="/users/petugas"
                  label="Petugas"
                  active={activeUrl === "/users/petugas"}
                  on:click={() => (hidden2 = true)}
                />
              </SidebarDropdownWrapper>
            </div>
          </SidebarGroup>
        {:else if data?.user_data.role === "Apoteker"}
          <SidebarGroup ulClass="space-y-2">
            <!-- List Menu -->
            <div>
              <SidebarItem
                class="text-sm"
                label="Dashboard"
                href="/"
                active={activeUrl === "/"}
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="carbon:meter" width="32" height="32" />
                </svelte:fragment>
              </SidebarItem>
              <hr class="my-1" />
              <SidebarItem
                class="text-sm"
                label="Obat"
                href="/obat"
                active={activeUrl === "/obat"}
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="game-icons:medicines" width="32" height="32" />
                </svelte:fragment>
              </SidebarItem>
            </div>
          </SidebarGroup>
        {:else}
          <SidebarGroup ulClass="space-y-2">
            <!-- List Menu -->
            <div>
              <SidebarItem
                class="text-sm"
                label="Dashboard"
                href="/"
                active={activeUrl === "/"}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="carbon:meter" width="32" height="32" />
                </svelte:fragment>
              </SidebarItem>
              <hr class="my-1" />
              <SidebarItem
                class="text-sm"
                label="Permintaan DPJP"
                href="/permintaan-dpjp"
                active={activeUrl === "/permintaan-dpjp"}
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="fa6-solid:user-doctor" width="32" height="32" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                  <span
                    class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium bg-yellow-300 rounded-full"
                    >1</span
                  >
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem
                class="text-sm"
                label="Pasien Saya"
                href="/pasien-saya"
                active={activeUrl === "/pasien-saya"}
                on:click={() => (hidden2 = true)}
              >
                <svelte:fragment slot="icon">
                  <Icon icon="healthicons:outpatient" width="32" height="32" />
                </svelte:fragment>
              </SidebarItem>
            </div>
          </SidebarGroup>
        {/if}
      </SidebarWrapper>
    </Sidebar>
  </Drawer>
</div>
