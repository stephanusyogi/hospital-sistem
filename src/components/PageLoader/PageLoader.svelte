<script>
  import { onDestroy, onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { loading } from './PageLoader'


  const progress = tweened(1, {
      duration: 1800,
      easing: cubicOut
  });
  
  onMount(() => {
        progress.set(1);
  });
</script>

<div class="progress-bar">
  <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
</div>


<style>
  .progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 0.25rem;
      z-index:100;
  }
  .progress-sliver {
      width: var(--width);
      background-color: #209a3f;
      height: 100%;
  }
</style>