

class ApiFeature {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr
    }
    paginate() {
        const page = this.queryStr.page * 1 || 1;
        const limit = this.queryStr.limit * 1 || 6;
        const skip = (page - 1) * limit;

        

        this.query = this.query.skip(skip).limit(limit)
        return this;

    }
     searchByCategory(){
        const category = this.queryStr.Category
       console.log(category)

        if(category === undefined || category == ""){
            console.log(category)
            return  this
        }
        this.query =  this.query.where({Category: category})

        

        return this
    }
   
}

module.exports = ApiFeature