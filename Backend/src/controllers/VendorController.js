const vendormodel=require("../models/VendorModel")


const savevendor= async(req,res)=>{
    try{
        const addvendor=await vendormodel.create(req.body)
        res.status(201).json({
            message:"create new vendor",
            data:addvendor
        })
    }
    catch(e){
        res.status(500).json({
            message:"error",
            data:e
        })
    }

}

const allvendor =async(req,res)=>{
    try{
        const vendor=await vendormodel.find().populate("vendorid userid")
        res.status(200).json({
            message:"all vendors display",
            data:vendor
        })
    }
    catch(e){
        res.status(500).json({
            message:"error",
            data:e
        })
    }
}

const findvendorbyid =async(req,res)=>{
    try{
        const vendorbyid= await vendormodel.findById(req.params.id)
        res.status(200).json({
            message:"vendor display",
            data:vendorbyid
        })
    }
    catch(e){
        req.status(500).json({
            message:"error",
            data:e
        })
    }
}

const findvendorbyidanddelete=async(req,res)=>{
    try{
        const deletevendor= await vendormodel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"vendor deleted successfully",
            data:deletevendor
        })
    }
    catch(e){
        req.status(500).json({
            message:"error",
            data:e
        })
    }
}

module.exports={savevendor, allvendor, findvendorbyid, findvendorbyidanddelete}