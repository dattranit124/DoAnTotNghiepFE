export class Customer {
	//--Phương thức khởi tạo class
	constructor() {}
	static async get(ctx) {
		return await ctx.$store
		  .dispatch("customer/get")
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getDetail(ctx, credentals) {
		return await ctx.$store
		  .dispatch("customer/getDetail", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async update(ctx, credentals) {
		return await ctx.$store
		  .dispatch("customer/update", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async delete(ctx, credentals) {
		return await ctx.$store
		  .dispatch("customer/delete", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };

}