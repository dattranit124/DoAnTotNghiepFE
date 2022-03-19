<template>
  <div>
    <div
      v-if="Items.length <= 0"
      class="text-center mt-5"
      style="height: 250px"
    >
      <h1>Chưa có sản phẩm trong giỏ hàng</h1>
      <button class="btn btn-outline-primary" @click="$router.push('/product')">
        Quay lại cửa hàng
      </button>
    </div>
    <div v-else class="row wrapper mt-5">
      <div v-if="$auth.user==null">Bạn phải đăng nhập để đặt hàng</div>
      <div v-else class="col-12 col-xl-8 my-2">
        <div class="row border-bottom border-3 mx-1 pb-2">
          <div class="col-5 fw-bold">SẢN PHẨM</div>
          <div class="col-3 fw-bold text-center">GIÁ</div>
          <div class="col-2 fw-bold text-center">SỐ LƯỢNG</div>
          <div class="col-2 fw-bold text-center">TỔNG</div>
        </div>
        <div
          class="row mx-1 my-3 pb-2 border-bottom border-1"
          v-for="(item, index) in Items"
          :key="index"
        >
          <div class="col-2 fw-bold">
            <img :src="item.Image" alt="" height="100" />
          </div>
          <div class="col-3">
            {{ item.ProductName }}
            <button class="btn btn-danger ms-2 mt-1" @click="removeItem(item.ProductId)">Xóa sản phẩm</button>

          </div>
          <div class="col-3 text-center">{{ item.Price | stringToMoney }}</div>
          <div class="col-2 text-center">{{ item.Quanlity }}</div>
          <div class="col-2 fw-bold text-center">
            {{ (item.Price * item.Quanlity) | stringToMoney }}
          </div>
        </div>
        <p><span class="text-danger">Lưu ý :</span>Hãy mua hóa đơn từ 500.000đ để được miễn phí vận chuyển.</p>
         <button
        class="btn btn-secondary w-25 my-2"
        @click="$router.push('/product')"
      >
        Quay lại cửa hàng
      </button>
      </div>
      <div class="col-12 col-xl-4 border-start my-2">
        <div class="border-bottom border-2">
          <h5>THÔNG TIN GIAO HÀNG</h5>
          <div class="ms-3">
            <h6>Khách hàng : {{objOrder.CustomerOrder.CustomerName}}</h6>
            <h6>Số điện thoại :{{objOrder.CustomerOrder.PhoneCustomer}} </h6>
            <h6>Email : {{objOrder.CustomerOrder.EmailCustomer}}</h6>
            <h6>Địa chỉ : {{objOrder.CustomerOrder.AddressCustomer}}</h6>
          </div>
        </div>
        <div class="mt-3">
          <h5>TỔNG SỐ LƯỢNG </h5>
          <div class="ms-3">
            <h6>Tổng tiền hàng : {{countMoney | stringToMoney}}</h6>
            <h6 v-if="countMoney>500000" class="my-3">Phí vận chuyển : Miễn phí</h6>
            <h6 v-else class="my-3">Phí vận chuyển : 30.000đ - 50.000đ</h6>
            <div class="border-bottom border-1"></div>
            <h6 class="mt-3">Thành tiền :{{countMoney | stringToMoney}} </h6>
          </div>
            <div @click="clickOrder" class="d-flex justify-content-center"><button class="btn btn-secondary mt-5 w-75 py-2 ">Tiến hành đặt hàng</button></div>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Order } from '@/utils/order'
export default {
  created () {
    this.objOrder.Product = this.Items;
  },
  data () {
    return {
      objOrder : {
        CustomerOrder : {
          CustomerName : this.$auth.user.FirstName ?? "" + ' ' + this.$auth.user.LastName ?? "",
          EmailCustomer : this.$auth.user.Account.Username ?? "",
          AddressCustomer :this.$auth.user.Address ?? "",
          PhoneCustomer : this.$auth.user.PhoneNumber ?? ""
        },
        Product :[],
      },
    }
  },
  methods: {
    ...mapMutations('cart',['removeItem','removeAll']),
    async clickOrder() {
        var _data = await Order.act(this, {data : this.objOrder})
        if(_data) {
            if(_data.IsSuccess)
            {
              this.$toast.success(_data.MSG)
              this.removeAll();
              setTimeout(() => {
                this.$router.push('/');
              }, 500);

            }
        }
        
    }
  },
  computed: {
    ...mapGetters("cart", ["Items",'countMoney']),
  },
  filters: {
    stringToMoney(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
};
</script>

<style></style>
