<script>
  export let jam, jenis_input, jumlah_input, jenis_output, jumlah_output
</script>

<div class="grid grid-cols-2 gap-2 border p-4 text-sm">
  <p class="font-semibold italic col-span-2 text-center">Jam {jam}</p>
  <div class="col-span-2">
    <p class="font-medium col-span-2 text-center">Input</p>
    <div class="grid grid-cols-2 gap-4">
      <p class="font-light">{jenis_input}</p>
      <p class="font-light text-right">{jumlah_input}</p>
    </div>
  </div>
  <div class="col-span-2">
    <p class="font-medium col-span-2 text-center">Output</p>
    <div class="grid grid-cols-2 gap-4">
      <p class="font-light">{jenis_output}</p>
      <p class="font-light text-right">{jumlah_output}</p>
    </div>
  </div>
</div>