<template>
  <div class="home">
    <staffList/>
  </div>
</template>

<script>
// @ is an alias to /src
import staffList from '@/components/staff/StaffList.vue'
export default {
  name: 'Home',
  components: {
    staffList,
  }
}
</script>
