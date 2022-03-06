export const state = () => ({
	cart : [],

  });
  export const mutations = {
	AddToCart(state,payloads) {
		this.$toast.success("Thêm thành công "+ payloads.ProductName);
		if(state.cart.length>0)
		{
			var index = state.cart.findIndex(item => item.ProductId == payloads.ProductId);
			if(index != -1)
			{
				state.cart[index].Quanlity += payloads.Quanlity;
			}
			else {
				state.cart.push(payloads);
			}
		}
		else {
			state.cart.push(payloads);
		}
	},
	removeItem(state,payloads)
	{
		
		var index = state.cart.findIndex(item => item.ProductId == payloads);
		if(index !=-1)
		{
			state.cart.splice(index,1);
			this.$toast.success("Xóa sản phẩm trong giỏ hàng thành công");
		}
		else {
			this.$toast.error("Xóa thất bại");
		}
	},
	removeAll (state)
	{
		state.cart = [];
	}
};
export const getters = {
	countItem(state) {
		var count =0;
		state.cart.forEach(item => {
			count+= item.Quanlity;
		});
		return count;
	},
	Items(state) {
		return state.cart;
	},
	countMoney(state) {
		var money =0;
		state.cart.forEach(element => {
			money += element.Quanlity*element.Price;
		});
		return money;
	}
}