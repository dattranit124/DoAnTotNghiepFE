<template>
  <div class="bg-white m-5">
    <div class="d-flex justify-content-between p-3">
      <h3 v-if="orders">{{orders.length }} Đơn hàng</h3>
      <!-- <button
        class="btn btn-secondary"
        @click="$router.push('/admin/order/create')"
      >
        Thêm đơn hàng
      </button> -->
    </div>
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead class="align-middle">
          <tr>
            <!-- Checkbox -->
            <th>Mã đơn hàng</th>
            <th>Ngày tạo đơn</th>
            <th>Tổng đơn hàng</th>
            <th>Trạng thái</th>
            <th>Khách hàng</th>
            <th>Số diện thoại</th>
            <th>Địa chỉ</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody class="border-top-0">
          <tr v-for="(item, index) in orders" :key="index">
            <!-- Checkbox -->

            <td>
				{{item.OderCustomerCheck}}
            </td>
            <!-- Code-->
            <td>
              {{ item.DateUpdate | formatDate }}
            </td>
            <!-- Status -->
            <td>
              {{ item.TotalPrice | stringToMoney }}
            </td>
            <td>
             
			  <span :class="['p-2 rounded-3 fw-bold',statusOrderClass(item.OrderStatus)]"> {{ item.OrderStatus | statusOrder }}</span>
            </td>
            <td>
              {{ item.CustomerOrder.CustomerName }}
            </td>
            <td>
              {{ item.CustomerOrder.PhoneCustomer }}
            </td>
            <td>
              {{ item.CustomerOrder.AddressCustomer }}
            </td>
            <td class="col-auto">
              <button @click="$router.push('/admin/order/' + item.OrderId)" class="btn btn-success">Sửa</button>
            </td>
            <td class="col-auto">
              <button
                @click="clickDelete(item.OrderId)"
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
import { Order } from "@/utils/order";
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
	statusOrder(value)
	{
		var string = '';
		switch(value) {
			case 0:
				string =  'Chờ tiếp nhận'
				break;
			case 1 : 
				string = 'Đã tiếp nhận'
				break;
			case 2 : 
				string = 'Đang giao hàng'
				break;	
			case 3 : 
				string = 'Đã giao hàng'
				break;
			default:
				break;
		};
		return string;
	},
  },
  methods: {
	  statusOrderClass(value)
	{
		var string = '';
		switch(value) {
			case 0:
				string =  'text-white bg-dark'
				break;
			case 1 : 
				string = 'bg-warning'
				break;
			case 2 : 
				string = 'bg-primary text-white'
				break;	
			case 3 : 
				string = 'bg-success text-white'
				break;
			default:
				break;
		};
		return string;
	},
    async loadData() {
      var _data = await Order.get(this);
      if (_data) {
        this.orders = _data;
      }
    },
    async clickDelete(id) {
      try {
        var _data = await Order.delete(this, { data: [id] });
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
      orders: [],
      objData: {
        pageSize: 10,
        pageIndex: 1,
        searchText: "",
      },
	  objStatus : [
		  {
			  name : 'Chờ xác nhận',
			  value : 0,
		  },
		  {
			  name : 'Đã tiếp nhận',
			  value : 1,
		  },
		  {
			  name : 'Đang giao hàng',
			  value : 2,
		  },
		  {
			  name : 'Đã giao hàng',
			  value : 3,
		  },
	  ],
      total: null,
    };
  },
  layout: "admin",
};
</script>
<style></style>
