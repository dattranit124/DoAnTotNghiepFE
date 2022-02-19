<template >

	<div  style="height : 450px; background-color : #F8F8F8" >
		<div class="wrapper row align-items-center text-center h-100">
			<div class="col-md-4 col-12 p-3"  v-for="(item, index) in objShip" :key="index">
				<img :src="item.img_url" alt="" height="40">
				<h4 class="pt-5">{{item.name}}</h4>
				<p class="pt-2">{{item.des}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
		objShip: [
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
		   {
			  img_url : 'https://res.cloudinary.com/dattranit/image/upload/v1644375884/DoAn/nyctxa1zsqrg7bvan3o9.png',
			  name :'Đổi trả trong 30 ngày',
			  des : 'Thúy Hằng cho phép quý khách hàng đổi trả trong 30 ngày kể từ ngày mua hàng nếu có bất kì vấn đề liên quan đến lỗi của hàng hóa.'
		  },
		  
	  ],
    }
  },
	
}
</script>
<style >
	
</style>