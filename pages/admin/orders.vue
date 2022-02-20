<template>
  <div class="mt-3">
    <h1>Orders Title</h1>
    <!-- Thanh filter -->
    <div class="row mb-2">
      <div class="col-6">
        <input
          type="text"
          placeholder="Filter order here..."
          class="form-control"
        />
      </div>
      <div class="col-auto">
        <select class="form-select" aria-label="Default select example">
          <option selected>Items per page</option>
          <option value="1">50</option>
          <option value="2">100</option>
          <option value="3">200</option>
        </select>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment method</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 20" :key="i">
            <td>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      :total_rows="20"
      :page_size="5"
      :curr_page="1"
      :page_ranges="5"
      :path="'asdfasdf'"
    />
  </div>
</template>

<script>
import Pagination from "@/components/share/pagination";
export default {
  components: { Pagination },
  layout: "admin",
};
</script>

<style></style>
