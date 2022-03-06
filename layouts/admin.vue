<template >
  <div>
    <div v-if="role != 'admin'" class="text-center mt-5">
      <h5>Bạn không có quyền truy cập vào trang này</h5>
      <button class="btn btn-danger" @click="$router.push('/')">Quay trở lại trang mua sắm</button>
    </div>
    <div v-else class="d-flex bg-secondary bg-opacity-10 ">
      <Share-Sidebar/>
       <main class="w-100" style="margin-left : 300px">
        <div class="pt-3 pt-md-4">
          <div class="pb-5 ms-3" style="margin-top: 100px">
            <Nuxt />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      role : '',
    }
  },
  created () {
    this.role = this.$auth.user.Role ;
  },
   middleware: ["auth"],
   
}
</script>
<style >
  
</style>