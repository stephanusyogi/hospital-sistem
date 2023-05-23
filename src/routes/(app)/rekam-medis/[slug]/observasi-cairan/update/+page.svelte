<script>

  import { Button, Input, Label, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, Tabs } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';
  import InputOutputForm from "./InputOutputForm.svelte";

  const handleSubmit = () => {
    Swal.fire({
      title: 'Update Observasi Cairan?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Update',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Observasi Cairan Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/observasi-cairan")
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
  
  const handleSubmitTambahHari = () => {
    Swal.fire({
      title: 'Tambahkan Hari?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Update',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Hari Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/rekam-medis/00123141/observasi-cairan")
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
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Form 12.19 Observasi Cairan</p>
        <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-xs lg:text-md">
          <li>Tulis pada bagian input, jenis cairan (infus, diet sonde/biasa) serta jumlah cairannya.</li>
          <li>Tulis pada bagian output, jenis cairan serta jumlah cairannya.</li>
          <li>Frekuensi balance cairan sesuai advis dokter/minimal 2x/hari.</li>
          <li>IWL = 5-10 cc/kg BB/24 jam</li>
        </ul>
      </div>
      <div class="flex flex-wrap justify-end gap-4">
        <Button type="submit" color="green">
          Simpan</Button>
      </div>
    </div>
    <hr class="my-5">
    <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" contentClass="bg-gray-50 rounded-lg dark:bg-gray-800 mt-4">
      <TabItem open title="Minggu, 9 April 2023">
        <div class="overflow-y-auto max-h-screen">
          <div class="grid grid-cols-2 gap-2 lg:gap-6 text-sm">
            <InputOutputForm jam="01.00"/>
            <InputOutputForm jam="02.00"/>
            <InputOutputForm jam="03.00"/>
            <InputOutputForm jam="04.00"/>
            <InputOutputForm jam="05.00"/>
            <InputOutputForm jam="06.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
            <InputOutputForm jam="07.00"/>
            <InputOutputForm jam="08.00"/>
            <InputOutputForm jam="09.00"/>
            <InputOutputForm jam="10.00"/>
            <InputOutputForm jam="11.00"/>
            <InputOutputForm jam="12.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
            <InputOutputForm jam="13.00"/>
            <InputOutputForm jam="14.00"/>
            <InputOutputForm jam="15.00"/>
            <InputOutputForm jam="16.00"/>
            <InputOutputForm jam="17.00"/>
            <InputOutputForm jam="18.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
            <InputOutputForm jam="19.00"/>
            <InputOutputForm jam="20.00"/>
            <InputOutputForm jam="21.00"/>
            <InputOutputForm jam="22.00"/>
            <InputOutputForm jam="23.00"/>
            <InputOutputForm jam="24.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem title="Senin, 10 April 2023">
        <div class="overflow-y-auto max-h-screen">
          <div class="grid grid-cols-2 gap-6 text-sm">
            <InputOutputForm jam="01.00"/>
            <InputOutputForm jam="02.00"/>
            <InputOutputForm jam="03.00"/>
            <InputOutputForm jam="04.00"/>
            <InputOutputForm jam="05.00"/>
            <InputOutputForm jam="06.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
            <InputOutputForm jam="07.00"/>
            <InputOutputForm jam="08.00"/>
            <InputOutputForm jam="09.00"/>
            <InputOutputForm jam="10.00"/>
            <InputOutputForm jam="11.00"/>
            <InputOutputForm jam="12.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
            <InputOutputForm jam="13.00"/>
            <InputOutputForm jam="14.00"/>
            <InputOutputForm jam="15.00"/>
            <InputOutputForm jam="16.00"/>
            <InputOutputForm jam="17.00"/>
            <InputOutputForm jam="18.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
            <InputOutputForm jam="19.00"/>
            <InputOutputForm jam="20.00"/>
            <InputOutputForm jam="21.00"/>
            <InputOutputForm jam="22.00"/>
            <InputOutputForm jam="23.00"/>
            <InputOutputForm jam="24.00"/>
            <div class="col-span-2">
              <Table shadow>
                <TableBody class="divide-y">
                  <TableBodyRow>
                    <TableBodyCell>
                      <div class="grid grid-cols-2 gap-6">
                        <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                        <Input type="text" id="" />
                      </div>
                    </TableBodyCell>
                  </TableBodyRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem title="Tambah Hari">
        <form on:submit|preventDefault={handleSubmitTambahHari}>
          <div class="flex items-center justify-between">
            <div>
              <Label for="" class="my-auto">Hari:</Label>
              <Input type="date" id="" />
            </div>
            <Button type="submit" color="yellow">
              Tambahkan Data</Button>
          </div>
          <br>
          <div class="overflow-y-auto max-h-screen">
            <div class="grid grid-cols-2 gap-6 text-sm">
              <InputOutputForm jam="01.00"/>
              <InputOutputForm jam="02.00"/>
              <InputOutputForm jam="03.00"/>
              <InputOutputForm jam="04.00"/>
              <InputOutputForm jam="05.00"/>
              <InputOutputForm jam="06.00"/>
              <div class="col-span-2">
                <Table shadow>
                  <TableBody class="divide-y">
                    <TableBodyRow>
                      <TableBodyCell>
                        <div class="grid grid-cols-2 gap-6">
                          <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                          <Input type="text" id="" />
                        </div>
                      </TableBodyCell>
                    </TableBodyRow>
                  </TableBody>
                </Table>
              </div>
              <InputOutputForm jam="07.00"/>
              <InputOutputForm jam="08.00"/>
              <InputOutputForm jam="09.00"/>
              <InputOutputForm jam="10.00"/>
              <InputOutputForm jam="11.00"/>
              <InputOutputForm jam="12.00"/>
              <div class="col-span-2">
                <Table shadow>
                  <TableBody class="divide-y">
                    <TableBodyRow>
                      <TableBodyCell>
                        <div class="grid grid-cols-2 gap-6">
                          <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                          <Input type="text" id="" />
                        </div>
                      </TableBodyCell>
                    </TableBodyRow>
                  </TableBody>
                </Table>
              </div>
              <InputOutputForm jam="13.00"/>
              <InputOutputForm jam="14.00"/>
              <InputOutputForm jam="15.00"/>
              <InputOutputForm jam="16.00"/>
              <InputOutputForm jam="17.00"/>
              <InputOutputForm jam="18.00"/>
              <div class="col-span-2">
                <Table shadow>
                  <TableBody class="divide-y">
                    <TableBodyRow>
                      <TableBodyCell>
                        <div class="grid grid-cols-2 gap-6">
                          <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                          <Input type="text" id="" />
                        </div>
                      </TableBodyCell>
                    </TableBodyRow>
                  </TableBody>
                </Table>
              </div>
              <InputOutputForm jam="19.00"/>
              <InputOutputForm jam="20.00"/>
              <InputOutputForm jam="21.00"/>
              <InputOutputForm jam="22.00"/>
              <InputOutputForm jam="23.00"/>
              <InputOutputForm jam="24.00"/>
              <div class="col-span-2">
                <Table shadow>
                  <TableBody class="divide-y">
                    <TableBodyRow>
                      <TableBodyCell>
                        <div class="grid grid-cols-2 gap-6">
                          <Label for="" class="my-auto">Input - (Output + IWL):</Label>
                          <Input type="text" id="" />
                        </div>
                      </TableBodyCell>
                    </TableBodyRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </form>
      </TabItem>
    </Tabs>
  </form>
</main>