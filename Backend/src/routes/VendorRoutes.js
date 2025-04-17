const vendorcontroller= require("../controllers/VendorController")
const routes= require("express").Router()

routes.post("/vendor", vendorcontroller.savevendor )
routes.get("/vendors", vendorcontroller.allvendor)
routes.get("/vendor/:id", vendorcontroller.findvendorbyid)
routes.delete("/vendor/:id", vendorcontroller.findvendorbyidanddelete)

module.exports=routes