import OverallStat from "../models/OverVew.js";

export const getOverallStat = async(req,res)=>{
    try{
        const overallData= await OverallStat.find();
        res.status(200).json(overallData[0]);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}