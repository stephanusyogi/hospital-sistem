<script>

  import { Button, Input, Label, Textarea } from "flowbite-svelte";

</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <div class="text-center">
    <h1 class="text-4xl font-normal mt-10 mb-2">Form Rekam Medis 12.16</h1>
  </div>
  <div class="text-center">
    <p class="text-2xl mb-2">CATATAN PERKEMBANGAN PASIEN TERINTEGRASI</p>
  </div>
  <hr class="border-2">
  <section class="p-8 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="mb-4">
      <Label for="ppa" class="mb-2">Profesional Pemberi Asuhan:</Label>
      <Textarea id="ppa" placeholder="Masukkan PPA" rows="4" name="ppa"/>
    </div>
    <div class="mb-4">
      <Label for="hasil" class="mb-2">Hasil asesmen pasien & pemberian pelayanan:</Label>
      <Textarea id="hasil" placeholder="Masukkan hasil asesmen" rows="6" name="hasil"/>
    </div>
    <div class="mb-4">
      <Label for="instruksi" class="mb-2">Instruksi:</Label>
      <Textarea id="instruksi" placeholder="Masukkan instruksi" rows="4" name="instruksi"/>
    </div>
    <div class="mb-4">
      <Label for="review" class="mb-2">Review & verifikasi DPJP:</Label>
      <Textarea id="review" placeholder="Masukkan review / verifikasi" rows="2" name="review"/>
    </div>
    <br>
    <div class="text-right">
      <Button color="green">Submit</Button>
    </div>
  </section>
</main>