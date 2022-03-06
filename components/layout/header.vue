<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div class="container-fluid wrapper">
    <nuxt-link to="/" role="button" class="navbar-brand"><img src="https://res.cloudinary.com/dattranit/image/upload/v1644306810/DoAn/f3ahvkmkzkc0r0l108ux.png" alt="" height="80"></nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(item, index) in objHeader" :key="index">
          <nuxt-link :to="item.url" class="nav-link active" aria-current="page" href="#">{{item.name}}</nuxt-link>
        </li>
      </ul>
      <form class="d-flex align-items-center">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        <div class="position-relative" @click="$router.push('/order')">
        <i class="fas fa-shopping-cart fs-3 ms-5 " role="button"></i>
          <span v-if="countItem>0" class="position-absolute top-0 end-1 fs-5 px-1 text-white rounded-circle bg-danger translate-middle ">{{countItem}}</span>
        </div>
      </form>
      <div v-if="!$auth.loggedIn"  class="ms-md-3" >
        <nuxt-link to="/login"><button class="btn btn-light">Đăng nhập</button></nuxt-link>
        <nuxt-link to="/signup"><button class="btn btn-light">Đăng ký</button></nuxt-link>
      </div>
      <div  v-else class="ms-md-3" >
        <button class="btn btn-light">{{$auth.user.FirstName + ' ' + $auth.user.LastName}}</button>
        <nuxt-link to="/login"><button class="btn btn-light">Đăng xuất</button></nuxt-link>
      </div>
      
    </div>
  </div>
</nav>
</template>
<script>
import { mapGetters} from 'vuex'
export default {
  created () {
  },
  computed : {
      ...mapGetters('cart',['countItem']),
  },
  data () {
    return {
      objHeader : [
        {
          name : 'Trang chủ',
          url : '/'
        },
        {
          name:'Giới thiệu',
          url : '/about'
        },
        {
          name:'Liên hệ',
          url : '/contact'
        },
        {
          name:'Tin tức & Sự kiện',
          url : '/blog'
        },
        {
          name:'Cửa hàng',
          url : '/product'
        },
      ],
    }
  },

};
</script>
<style scoped>
.header {
	height: 100px;
}
</style>
