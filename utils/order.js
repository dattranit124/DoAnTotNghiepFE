export class Order {
	//--Phương thức khởi tạo class
	constructor() {}
  
	// List
	static async act(ctx, credentals) {
	  return await ctx.$store
		.dispatch("order/act", credentals)
		.then(something => something)
		.catch(error => null);
	};
	static async get(ctx) {
		return await ctx.$store
		  .dispatch("order/get")
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async delete(ctx, credentals) {
		return await ctx.$store
		  .dispatch("order/delete", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getDetail(ctx, credentals) {
		return await ctx.$store
		  .dispatch("order/getDetail", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async update(ctx, credentals) {
		return await ctx.$store
		  .dispatch("order/update", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
}
