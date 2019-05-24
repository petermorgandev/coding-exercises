<template>
  <div class="add">
    <Navbar/>
    <div class="container bg-white">
      <PageHeader>
        Add New Device
        <small class="text-muted">{{count}}/6 devices connected</small>
      </PageHeader>
      <lazyAddDeviceForm/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
const lazyAddDeviceForm = () => import("@/components/AddDeviceForm");

export default {
  name: "add",
  components: {
    Navbar,
    PageHeader,
    lazyAddDeviceForm
  },
  computed: {
    count() {
      return this.$store.state.deviceCount;
    }
  }
};
</script>