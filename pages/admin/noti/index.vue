<template>
  <div class="bg-white m-5">
    <div class="d-flex justify-content-between p-3">
      <h3 v-if="notis">{{notis.length }} Phản hồi</h3>
     
    </div>
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead class="align-middle">
          <tr>
            <!-- Checkbox -->
            <th>Tên khách hàng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody class="border-top-0">
          <tr v-for="(item, index) in notis" :key="index">
            <!-- Checkbox -->

            <td>
              {{item.FullName}}
            </td>
            <!-- Code-->
            <td>
              {{ item.Email }}
            </td>
            <!-- Status -->
            <td>
              {{ item.PhoneNumber }}
            </td>

            <td class="col-auto">
              <button @click="getDetail(item.NotificationId)" class="btn btn-success">Xem</button>
            </td>
            <td class="col-auto">
              <button
                @click="clickDelete(item.NotificationId)"
                class="btn btn-danger"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
	<Modal-View-Notification v-if="showNoti" @onHidden="showNoti = false" :detail="detailNoti"/>
  </div>
</template>
<script>
import { Notification } from "@/utils/noti";
export default {
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      var _data = await Notification.get(this);
      if (_data) {
        this.notis = _data;
      }
    },
    async clickDelete(id) {
      try {
        var _data = await Notification.delete(this, { data: [id] });
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
	async getDetail(id) {
		var _data = await Notification.getDetail(this,id);
		this.detailNoti = await _data;
		this.showNoti = true;

	}
  },
  data() {
    return {
      notis: [],
	  showNoti : false,
	  detailNoti : {},
    };
  },
  layout: "admin",

};
</script>
<style></style>
