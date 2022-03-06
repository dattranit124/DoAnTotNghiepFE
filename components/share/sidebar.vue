<template >
  <div>
   <div class="container-fluid shadow-sm bg-light position-fixed start-0 end-0 top-0 d-flex justify-content-between p-3" style="z-index : 111">
     <h4 >Quản trị shop thời trang Thúy Hằng</h4>
     <div>Xin chào <span class="fw-bold">Admin</span></div>
   </div>

   <div class="bg-white position-fixed" style="margin-top: 60px; width : 300px; height : calc( 100vh - 60px)">
     <div class="d-flex justify-content-center"><img class="my-3" src="https://res.cloudinary.com/dattranit/image/upload/v1644306810/DoAn/f3ahvkmkzkc0r0l108ux.png" alt="" height="80"></div>
     <ul class="list-group">
       <li role="button" :class="['list-group-item list-group-item-action py-3',{'bg-dark text-white bg-opacity-25' : path== item.url}]" v-for="(item, index) in items" :key="index">
      <i :class="item.icon"></i>
      <nuxt-link class="ms-3 fs-5 w-100 h-100" :to="item.url">{{item.name}}</nuxt-link>
      </li>
     </ul>
   </div>
  </div>
</template>
<script>
export default {
 computed : {
   path() {
      return this.$route.path;
    }
 },
  data () {
    return {
      items : [
        {
          name : "Dashboard",
          url : '/admin',
          icon : 'fas fa-box'
        },
        {
          name : "Sản phẩm",
          url : '/admin/product',
          icon : 'fas fa-box'
        },
        {
          name : "Bộ sưu tập",
          url : '/admin/collection',
          icon : 'fas fa-list'
        },
        {
          name : "Khách hàng",
          url : '/admin/customer',
          icon : 'fas fa-users'
        },
        {
          name : "Đơn hàng",
          url : '/admin/order',
          icon: 'fas fa-shopping-cart'
        },
        {
          name : "Bài viết",
          url : '/admin/new',
          icon :'fas fa-newspaper'
        },
        {
          name : "Phản ánh từ khách hàng",
          url : '/admin/noti',
          icon : 'fas fa-sticky-note'
        },
      ]
    }
  },
  
}
</script>
<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
</style>