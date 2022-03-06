<template>
  <div class="bg-white m-5">
    <div class="d-flex justify-content-between p-3">
      <h3 v-if="products">{{products.length }} Sản phẩm</h3>
      <button
        class="btn btn-secondary"
        @click="$router.push('/admin/product/create')"
      >
        Thêm sản phẩm
      </button>
    </div>
    <div class="table-responsive">
      <input
        class="form-control w-75 m-2 ms-5"
        type="text"
        placeholder="Nhập tên sản phẩm để tìm kiếm...."
        v-model="objData.searchText"
      />
      <table class="table table-hover align-middle">
        <thead class="align-middle">
          <tr>
            <!-- Checkbox -->
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody class="border-top-0">
          <tr v-for="(item, index) in products" :key="index">
            <!-- Checkbox -->

            <td>
              <img
                v-if="item.Image != ''"
                :src="item.Image"
                class="rounded-circle"
                style="width: 80px; height: 80px; object-fit :cover"
              />
              <img
               v-else
                src="@/static/assets/image/no-image.png"
                class="rounded-circle"
                style="width: 80px; height: 80px"
              />
              <span class="ms-2">{{ item.ProductName }}</span>
            </td>
            <!-- Code-->
            <td>
              {{ item.Total }}
            </td>
            <!-- Status -->
            <td>
              {{ item.Price | stringToMoney }}
            </td>
            <td class="col-auto">
              <button @click="$router.push('/admin/product/' + item.ProductId)" class="btn btn-success">Sửa</button>
            </td>
            <td class="col-auto">
              <button
                @click="clickDelete(item.ProductId)"
                class="btn btn-danger"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { Product } from "@/utils/product";
export default {
  created() {
    this.loadData();
  },
  filters: {
    stringToMoney(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
  methods: {
    async loadData() {
      var _data = await Product.get(this, { params: this.objData });
      if (_data) {
        this.products = _data.product;
        this.total = _data.totalpage;
      }
    },
    async clickDelete(id) {
      try {
        var _data = await Product.delete(this, { data: [id] });
        if (_data) {
          if (_data.IsSuccess) {
            this.$toast.success(_data.MSG);
            this.loadData();
          }
        }
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
  data() {
    return {
      products: [],
      objData: {
        pageSize: 100,
        pageIndex: 1,
        searchText: "",
      },
      total: null,
    };
  },
  layout: "admin",
  watch: {
    "objData.searchText": function () {
      this.loadData();
    },
  },
};
</script>
<style></style>
