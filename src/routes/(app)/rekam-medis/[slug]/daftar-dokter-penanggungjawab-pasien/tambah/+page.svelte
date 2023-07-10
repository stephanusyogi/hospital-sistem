<script>

  import { Button, Checkbox, Input, Label, Select, Textarea } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { onMount } from "svelte";

  export let form
  export let data

  let dpjp = []
  
  let status = [
    {value:"dpjp_utama", name: "DPJP Utama"},
    {value:"dpjp", name: "DPJP"},
  ]
  
  const handleSubmit = () => {
    Swal.fire({
      title: 'Ajukan Permintaan Dokter?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Ajukan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    })
  }
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.dokter){
      // Load Data Dokter
      data.dokter.forEach((item) => {
        dpjp.push({
          value: item._id,
          name: `${item.name} - ${item.spesialis}`,
        });
      })
    }
  })
</script>


<main>
  <form id="form" on:submit|preventDefault={handleSubmit} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Form 12.54 Permintaan Kesediaan DPJP</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green" size="sm">
        Ajukan</Button>
    </div>
    <hr class="my-5">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="my-2">
        <Label>Nama DPJP:  <span class="text-sm text-red-500 italic">*</span>
          <Select class="mt-2" name="id_dokter" items={dpjp} required/>
        </Label>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Keterangan Perawat: <span class="text-sm text-red-500 italic">*</span></Label>
        <Textarea id="" placeholder="Masukkan Keterangan" rows="2" name="keterangan_perawat"/>
        <Checkbox name="atas_permintaan_pasien">Permintaan Pribadi Pasien Rawat Inap</Checkbox>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Tanggal Mulai: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="tgl_mulai" type="date" required/>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Tanggal Selesai: <span class="text-sm text-red-500 italic">*</span></Label>
        <Input name="tgl_selesai" type="date" required/>
      </div>
    </div>
  </form>
</main>