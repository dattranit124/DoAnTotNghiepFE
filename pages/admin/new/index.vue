<template>
  <div class="bg-white m-5">
    <div class="d-flex justify-content-between p-3">
      <h3 v-if="pages">{{pages.length }} Bài viết</h3>
	   <button
        class="btn btn-secondary"
        @click="$router.push('/admin/new/create')"
      >
        Thêm bài viết
      </button>
     
    </div>
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead class="align-middle">
          <tr>
            <!-- Checkbox -->
            <th>Tiêu đề</th>
            <th>Ngày tạo</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody class="border-top-0">
          <tr v-for="(item, index) in pages" :key="index">
            <!-- Checkbox -->

            <td>
              {{item.Title}}
            </td>
            <!-- Status -->
            <td>
              {{ item.DateCreated | formatDate}}
            </td>

            <td class="col-auto">
              <button @click="$router.push('/admin/new/' + item.PageId)"  class="btn btn-success">Sửa</button>
            </td>
            <td class="col-auto">
              <button
                @click="clickDelete(item.PageId)"
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
import { Page } from "@/utils/page";
export default {
  created() {
    this.loadData();
  },
  filters : {
	  formatDate(value) {
      if (value == null) return "";
      else {
		  var date = new Date(value)
        var dateStr = "";
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (day < 10) {
          day = `0${day}`;
        }
        if (month < 10) {
          month = `0${month}`;
        }
        dateStr = `${day}/${month}/${year}`;
        return dateStr;
      }
    },
  },
  methods: {
    async loadData() {
      var _data = await Page.get(this);
      if (_data) {
        this.pages = _data;
      }
    },
    async clickDelete(id) {
      try {
        var _data = await Page.delete(this, { data: [id] });
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
      pages: [],
    };
  },
  layout: "admin",

};
</script>
<style></style>
