<template>
  <div style="height: calc(100vh - 165px)">
    <div class="mx-5 p-3">
      <h3 class="text-center">Hệ thống quản lý của cửa hàng Thúy Hằng</h3>
      <div class="row mt-5 ms-5">
        <div
        role="button"
          class="col-5 item rounded bg-white my-3 p-2 mx-3 "
          v-for="(item, index) in list"
          :key="index"
        >
          <div class>
            <h5 class="fw-bold">{{ item.name }}</h5>
            <p>
              {{ item.des }}
            </p>
            <nuxt-link :to="item.url" class="btn btn-primary"
              >Đến trang quản lý</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "Sản phẩm",
          des: "Vào trang thực hiện quản lý thêm, sửa, xóa và xem danh sách các sản phẩm của cửa hàng",
          url: "/admin/product",
        },
        {
          name: "Bộ sưu tập",
          des: "Vào trang thực hiện quản lý thêm, sửa, xóa và xem danh sách các bộ sưu tập của cửa hàng",
          url: "/admin/collection",
        },
        {
          name: "Khách hàng",
          des: "Vào trang thực hiện quản lý thêm, sửa, xóa và xem danh sách các khách hàng của cửa hàng",
          url: "/admin/customer",
        },
        {
          name: "Đơn hàng",
          des: "Vào trang thực hiện quản lý thêm, sửa, xóa và xem danh sách các đơn hàng của cửa hàng",
          url: "/admin/order",
        },
        {
          name: "Bài viết",
          des: "Vào trang thực hiện quản lý thêm, sửa, xóa và xem danh sách các bài viết & tin tức của cửa hàng",
          url: "/admin/new",
        },
        {
          name: "Phản ánh từ khách hàng",
          des: "Vào trang thực hiện quản lý thêm, sửa, xóa và xem danh sách các phản ánh của cửa hàng",
          url: "/admin/noti",
        },
      ],
    };
  },

  layout: "admin",
};
</script>
<style scoped>
.item:hover {
  border: 2px solid #7b40f4;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 25%);
  transform: translateY(-3px);
  transition: all 0.15s ease;
}
</style>
