<script>

  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import { Button, Label, Select, Textarea } from "flowbite-svelte";


  let instruksi = [
		{
			instruksi: "",
		},
	];

	function addInstruksi() {
		instruksi = [
			...instruksi,
			{
				instruksi: "",
			},
		];
	}

	function deleteInstruksi(index) {
		instruksi = instruksi.filter((_, i) => i !== index);
	}

  let numberInstruksi = 1

  const handleSubmit = () => {
    Swal.fire({
      title: 'Tambahkan Catatan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tambah',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Catatan Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/catatan-perkembangan-pasien-terintegrasi")
        })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.16 Catatan Perkembangan Pasien Terintegrasi</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <Button type="submit" color="green" size="sm">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 gap-4">
      <div class="my-2">
        <Label>Hasil Asesmen Pasien & Pemberian Pelayanan:  <span class="text-sm text-red-500 italic">*</span></Label>
        <p class="text-sm space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">Tulis dengan format SOAP, disertai sasaran</p>
        <br>
        <Label>Subjective:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="" row="4"/>
        <Label>Objective:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="" row="4"/>
        <Label>Assessment:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="" row="4"/>
        <Label>Plan:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="" row="4"/>
        <Label>Sasaran:  <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="" name="" row="4"/>
      </div>
      <div class="my-2">
        <div class="flex items-center justify-between mb-2">
          <p class="text-md font-medium">Instruksi</p>
          <Button size="md" on:click={addInstruksi}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="sm:mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah Instruksi</span>
          </Button>
        </div>
        {#each instruksi as tag, i}
          <div class="flex flex-wrap sm:flex-nowrap items-center gap-4 py-2">
            <p class="hidden sm:block">{numberInstruksi+i + ")"}</p>
            <Textarea rows="2" name="instruksi[]" placeholder="Masukan Diagnosa" bind:value={instruksi[i].instruksi}/>
            <Button class="w-full sm:w-24" on:click={() => deleteInstruksi(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
          </div>
        {/each}
      </div>
    </div>
  </form>
</main>