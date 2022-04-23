import Terms from '../models/terms';

export const getTypes = async (req, res)=>{
  // get all types in DB
  Terms.collection.distinct("type", function(error, results){
    res.json (results);
  });
}

export const getTerms = async (req, res)=>{
  // get all Terms from db by type
    const result = await Terms.find({type:req.params.type});
    if (!result){
        console.log ("Terms Not Found");
        return res.status(404).send("Terms Not Found");
    }
    else {
      // go over db results and count how each terms for type
        let arrTerms = {};
        for (let i=0; i<result.length; i++){
            for (let j=0; j<result[i].terms.length ; j++){
                  if (arrTerms[result[i].terms[j]]){
                    arrTerms[result[i].terms[j]]++;
                  }
                  else{
                    arrTerms[result[i].terms[j]] = 1;
                  }                    
            }
        }
        // return json of terms with numbers of occurrences 
        res.json(arrTerms);
    }
}

export const addTerms = async(req, res)=>{
 const {type , terms} = req.body;
 
 // check if type and terms valid 
 if (type == null || terms.length==0 ){
  return res.json({
    error: "error type not exist!!",
  });
 }
 
 // create new terms schema
 const newTerms = new Terms({ type: type, terms: terms});
 try { 
   // save term in db
  await newTerms.save();
  return res.json({
    ok: true,
  });
} catch (err) {
  return res.status(400).send("Error. while creating terms, try again");
}
}