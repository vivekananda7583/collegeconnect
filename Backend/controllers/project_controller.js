export const postproject=async(req,res)=>{
   try {
    const{title,summary,positions,owner}=req.body();
    const userid=req.id;
    if(!title || !summary || !positions || !owner){
        return res.status(400).json({
            message:"Something is missing",
            succes:false,
        }); 
    }
    const project =await Projects.create({
        title,
        summary,
        positions:positions.split(" "),
        userId:userid,
    });
    return res.status(200).json({
        message:"Project Idea Created successfully",
        project,
        success:true,
    })
   } catch (error) {
    console.log(error);
   }
}
export const getproject=async(req,res)=>{
    try {
        const userid=req.id;
        const projects= await Projects.find({owner:userid});
    if(!projects){
        return res.status(404).json({
            message:"No Projects Found",
            success:false,
        })
    }
    return res.status(200).json({
        projects,
        success:true,

    })
    } catch (error) {
        console.log(error);
    }
};
export const getallprojects=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
            ]
        };
        const projects=await Projects.find(query);
        if(!projects){
            return res.status(404).json({
                message:"Projects Not Found",
                success:false,
            })
        }
        return res.status(200).json({
            projects,
            success:true,
        });                  

    } catch (error) {
        console.log(error);
    }
}