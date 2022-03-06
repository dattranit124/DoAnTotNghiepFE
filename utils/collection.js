export class Collection {
	//--Phương thức khởi tạo class
	constructor() {}
  
	// List
	static async get(ctx) {
	  return await ctx.$store
		.dispatch("collection/get")
		.then(something => something)
		.catch(error => null);
	};
	static async act(ctx,credentals) {
		return await ctx.$store
		  .dispatch("collection/act",credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getDetail(ctx,credentals) {
		return await ctx.$store
		  .dispatch("collection/getDetail",credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async delete(ctx, credentals) {
		return await ctx.$store
		  .dispatch("collection/delete", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
}