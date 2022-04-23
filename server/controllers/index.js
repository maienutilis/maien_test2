import db from "../db"

export const getTerms = async(req, res)=>{

    console.log ("addsf")
    console.log (db)

    
    //const aaa = await Post.find({ postedBy: { $in: following } })
     //trying to get collection names
     /*dbConnect.connection.db.collectionNames(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });*/
/*
    //var dbo = dbConnect.db("NLP");
    dbConnect.collection("TERMS").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    })
    */
}