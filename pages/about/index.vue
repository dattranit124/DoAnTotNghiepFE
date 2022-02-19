<template>
  <div>
    <Layout-Page-Title :title="title" />
    <div class="about wrapper">
      <div class="text-center">
        <img
          src="https://res.cloudinary.com/dattranit/image/upload/v1644306810/DoAn/f3ahvkmkzkc0r0l108ux.png"
          alt=""
          height="150"
        />
        <p class="fs-4">
          Hệ thông Thúy Hằng hân hạnh mang đến cho quý khách những trải nghiệm
          tuyệt vời khi mua sắm.
        </p>
      </div>
      <div class="row wrapper text-center align-items-center">
		  <div class="col-12 col-md-3 mt-5 mt-md-0">
			  <div v-for="(item, index) in left" :key="index" class="text-center direction">
				  	<img :src="item.img_url" alt="" height="50">
					<h3>{{item.name}}</h3>
					<p class="fs-4">{{item.des}}</p>
			  </div>
		  </div>
		  <div class="col-12  col-md-6 mt-5 mt-md-0">
			<img src="https://res.cloudinary.com/dattranit/image/upload/v1644373445/DoAn/qjleualgjckngqffssd2.png" alt="" height="800">
		  </div>
		   <div class="col-12 col-md-3 mt-5 mt-md-0">
			  <div v-for="(item, index) in right" :key="index" class="text-center direction">
				  	<img :src="item.img_url" alt="" height="50">
					<h3>{{item.name}}</h3>
					<p class="fs-4">{{item.des}}</p>
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
      title: "Giới Thiệu",
	  left: [
		  {
			  img_url : 'https://res.cloudinary.com/dattranit/image/upload/v1644375727/DoAn/anbwoddizzqcbw8cokoa.png',
			  name :'Miễn phí giao hàng',
			  des : 'Đến với Thúy Hằng bạn sẽ được miễn phí giao hàng với các đơn hàng chỉ từ 500k trở lên'
		  },
		  {
			  img_url : 'https://res.cloudinary.com/dattranit/image/upload/v1644375854/DoAn/gmjojcot9lmanv4eo9gu.png',
			  name :'Thanh toán an toàn',
			  des : 'Thúy Hằng triển khai 2 hình thức thanh toán chính là : Giao hàng nhận tiền hoặc Thanh toán qua thẻ ngân hàng giúp khách hàng có nhiều sự lựa chọn hơn khi mua hàng'
		  },
		  
	  ],
	  right : [
		  {
			  img_url : 'https://res.cloudinary.com/dattranit/image/upload/v1644375884/DoAn/nyctxa1zsqrg7bvan3o9.png',
			  name :'Đổi trả trong 30 ngày',
			  des : 'Thúy Hằng cho phép quý khách hàng đổi trả trong 30 ngày kể từ ngày mua hàng nếu có bất kì vấn đề liên quan đến lỗi của hàng hóa.'
		  },
		  {
			  img_url : 'https://res.cloudinary.com/dattranit/image/upload/v1644375856/DoAn/jf7hxt2aqjvgsvktwb1b.png',
			  name :'Sản phẩm đa dạng',
			  des : 'Thúy Hằng liên tục cập nhật liên tục những sản phẩm mới, hot trend giúp khách hàng có thể lựa chọn thoải mái về thời trang của mình. '
		  },
	  ]
    };
  },
  layout: "default",
};
</script>
<style scoped>
@media screen and (min-width : 768px) {
	
	.direction {
		margin-bottom: 200px;
		margin-top: 100px;
	}
}
</style>
