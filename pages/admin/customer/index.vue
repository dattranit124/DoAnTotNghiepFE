<template>
  <div class="bg-white m-5">
    <div class="d-flex justify-content-between p-3">
      <h3 v-if="customers">{{customers.length }} Khách hàng</h3>
     
    </div>
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead class="align-middle">
          <tr>
            <!-- Checkbox -->
            <th>Tên khách hàng</th>
            <th>Tài khoản</th>
            <th>Mật khẩu</th>
			<th>Số điện thoại</th>
			<th>Địa chỉ</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody class="border-top-0">
          <tr v-for="(item, index) in customers" :key="index">
            <!-- Checkbox -->

            <td>
              {{item.FirstName + ' ' + item.LastName}}
            </td>
            <!-- Code-->
            <td>
              {{ item.Account.Username }}
            </td>
            <!-- Status -->
            <td>
              {{ item.Account.Password }}
            </td>
            <td>
              {{ item.PhoneNumber }}
            </td>
            <td>
              {{ item.Address }}
            </td>
            <td class="col-auto">
              <button @click="$router.push('/admin/customer/' + item.CustomerId)" class="btn btn-success">Sửa</button>
            </td>
            <td class="col-auto">
              <button
                @click="clickDelete(item.CustomerId)"
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
import { Customer } from "@/utils/customer";
export default {
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      var _data = await Customer.get(this);
      if (_data) {
        this.customers = _data;
      }
    },
    async clickDelete(id) {
      try {
        var _data = await Customer.delete(this, { data: [id] });
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
      customers: [],
    };
  },
  layout: "admin",

};
</script>
<style></style>
