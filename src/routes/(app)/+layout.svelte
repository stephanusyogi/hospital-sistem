<script>
  // import "../app.postcss";
  import Sidebar from "./Sidebar.svelte";
  import Navbar from "./Navbar.svelte";
  
  import { fade } from 'svelte/transition';
  import {navigating} from '$app/stores'
  
  import { loading } from '../../components/PageLoader/PageLoader'
  import PageLoader from '../../components/PageLoader/PageLoader.svelte'

  $: loading.setNavigate(!!$navigating) 
  
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>


<svelte:head>
  <title>RSIA - Hospital Sistem</title>
</svelte:head>

{#if $loading.status === 'NAVIGATING'}
  <PageLoader />
{/if} 
<div class="flex bg-gray-100 min-h-screen">
  <Sidebar user_data={data?.user_data}/>
  <div class="relative overflow-x-auto w-full bg-gray-100">
    <Navbar user_data={data?.user_data}/>
    <!-- Content -->
    <slot user_data={data?.user_data}/>
  </div>
</div>

