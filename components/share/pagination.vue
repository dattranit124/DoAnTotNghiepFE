<template>
  <div class="mt-3" style="z-index: 0">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item cursor-pointer" v-if="curr_page > 1">
          <nuxt-link :to="path + 1" class="page-link" aria-hidden="true"
            >First</nuxt-link
          >
        </li>
        <li class="page-item cursor-pointer" v-if="curr_page > 1">
          <nuxt-link
            :to="path + (curr_page - 1)"
            class="page-link"
            aria-hidden="true"
            >&laquo;</nuxt-link
          >
        </li>
        <li
          class="page-item cursor-pointer"
          :class="curr_page == i ? 'active' : ''"
          v-for="i in fncPagination"
          :key="i"
        >
          <nuxt-link :to="path + i" class="page-link">{{ i }}</nuxt-link>
        </li>
        <li class="page-item cursor-pointer" v-if="curr_page < total_pages">
          <nuxt-link :to="path + (curr_page + 1)" class="page-link"
            >&raquo;</nuxt-link
          >
        </li>
        <li class="page-item cursor-pointer" v-if="curr_page < total_pages">
          <nuxt-link :to="path + total_pages" class="page-link">Last</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    total_rows: { type: Number, default: 1 },
    page_size: { type: Number, default: 12 },
    curr_page: { type: Number, default: 1 },
    page_ranges: { type: Number, default: 5 },
    path: { type: String, default: "" },
  },
  data() {
    return {
      total_pages: 1,
    };
  },
  computed: {
    fncPagination() {
      let current_page = this.curr_page; // Trang hiện tại
      let page_ranges = this.page_ranges; // Số trang hiển thị
      this.total_pages = Math.ceil(
        this.total_rows / this.page_size // Tổng số trang
      );
      let middle = Math.ceil(this.page_ranges / 2); // Trang vị trí giữa

      // Tìm min của pageRange
      let min = current_page - middle + 1;

      // Tìm max của pageRange
      let max = min + page_ranges - 1;
      if (min <= 1) {
        min = 1;
        max = page_ranges;
      }
      if (max >= this.total_pages) {
        max = this.total_pages;
        min = max - page_ranges + 1 >= 1 ? max - page_ranges + 1 : 1;
      }

      // Chuyển max min sang mảng để v-for
      let arr = [];
      for (let index = min; index <= max; index++) {
        arr.push(index);
      }

      return arr;
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
