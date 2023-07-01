<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
  } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
  import { sineIn } from "svelte/easing";

  import userIcon from "$lib/images/user.png";

  export let user_data, hidden2;
</script>

<Navbar
  navClass="absolute z-40 px-2 sm:px-4 py-3 w-full border-b drop-shadow-md"
>
  <NavHamburger class="block sm:hidden" on:click={() => (hidden2 = false)} />
  <NavBrand href="/">
    <span
      class="hidden sm:block self-center whitespace-nowrap text-sm md:text-lg lg:text-lg xl:text-xl font-semibold dark:text-white"
      >Selamat Datang, {user_data?.name}</span
    >
  </NavBrand>
  <div class="justify-between flex items-center gap-4">
    <a href="/scan"
      ><Icon icon="bx:qr-scan" width="25" height="25" href="/" /></a
    >
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu" src={userIcon} />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm"> {user_data?.email} </span>
        <span class="block truncate text-sm font-medium">
          {user_data?.role}
        </span>
      </DropdownHeader>
      <DropdownItem>
        <form action="/logout" method="post">
          <button type="submit">Log out</button>
        </form>
      </DropdownItem>
    </Dropdown>
  </div>
</Navbar>
