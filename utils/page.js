export class Page {
	//--Phương thức khởi tạo class
	constructor() {}
  
	// List
	static async get(ctx) {
	  return await ctx.$store
		.dispatch("page/get")
		.then(something => something)
		.catch(error => null);
	};
	static async act(ctx,credentals) {
		return await ctx.$store
		  .dispatch("page/act",credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getDetail(ctx,credentals) {
		return await ctx.$store
		  .dispatch("page/getDetail",credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async delete(ctx, credentals) {
		return await ctx.$store
		  .dispatch("page/delete", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getBySlug(ctx, credentals) {
		return await ctx.$store
		  .dispatch("page/getBySlug", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
}