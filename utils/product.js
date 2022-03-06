export class Product {
	//--Phương thức khởi tạo class
	constructor() {}
  
	// List
	static async get(ctx, credentals) {
	  return await ctx.$store
		.dispatch("product/get", credentals)
		.then(something => something)
		.catch(error => null);
	};
	static async getBySlug(ctx, credentals) {
		return await ctx.$store
		  .dispatch("product/getBySlug", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async delete(ctx, credentals) {
		return await ctx.$store
		  .dispatch("product/delete", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async act(ctx, credentals) {
		return await ctx.$store
		  .dispatch("product/act", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getDetail(ctx, credentals) {
		return await ctx.$store
		  .dispatch("product/getDetail", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
}