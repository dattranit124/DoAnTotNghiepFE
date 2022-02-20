<template>
  <div>
    <header class="p-3 d-flex justify-content-between">
      <div><b>Admin</b></div>
      <div class="me-2 me-md-0">
        <div class="dropdown d-inline-block me-2 me-md-0">
          <button
            class="btn dropdown-toggle p-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <button @click="openSideBar" class="btn p-0">
          <i class="fas fa-bars d-none"></i>
        </button>
      </div>
    </header>
    <div class="main-content d-flex">
      <aside id="sidebar-left" class="p-2">
        <div class="d-flex justify-content-between align-items-center">
          <h4>title</h4>
          <button
            @click="openSideBar"
            type="button"
            class="btn-close d-md-none"
            aria-label="Close"
          ></button>
        </div>
        <!-- Lưu danh sách các navigator -->
        <ul>
          <li v-for="(nav, iNav) in navigations" :key="iNav">
            <nuxt-link :to="navigations.slug">{{ navigations.name }}</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="">order</nuxt-link>
          </li> -->
        </ul>
      </aside>
      <main class="container-fluid">main</main>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      navigations: [
        { name: "Collection", slug: "collection" },
        { name: "Orders", slug: "order" },
        { name: "Notification", slug: "notification" },
        { name: "Page ", slug: "Page" },
        { name: "Customers ", slug: "customers" },
        { name: "Product ", slug: "product" },
      ],
    };
  },
  methods: {
    //-- Mở side-bar
    openSideBar() {
      let sideBar = document.getElementById("sidebar-left");
      sideBar.classList.toggle("side-bar-toggle");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");

aside {
  width: 300px;
  background-color: aquamarine;
  height: calc(100vh - 52px);
}

main {
  background-color: bisque;
}

.side-bar-toggle {
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}

/* Màn hình điện thoại và tablet */
@media only screen and (max-width: 767px) {
  .fa-bars {
    display: inline-block !important;
  }

  aside {
    position: absolute;
    left: -100%;
    /* transition: all 0.3s ease-in !important; */
  }
}

/* Màn hình desktop */
@media only screen and (min-width: 768px) {
  aside {
    width: 300px !important;
    height: calc(100vh - 52px) !important;
  }
}
</style>
