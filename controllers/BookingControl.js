const User=require('../models/User')
exports.getBookings=async(req,res,next)=>{
    try{
        const data=await User.findAll();
        res.status(200).json({allUsers: data})

    }
    catch(e)
    {
        res.status(404).json({error: e})
        console.log('Get Bookings not working',JSON.stringify(e))
    }
}
exports.postBookings=async(req,res,next)=>{
    try{
        if(!req.body.email){
            throw new Error('Email is mandatory')

        }
        const name=req.body.name;
        const email=req.body.email;
        const phone=req.body.phonenumber;
        
        console.log(name,email,phone)
        const data=await User.create({name: name, email: email, phonenumber: phone}) //user.create is promise based
        res.status(201).json({newUserDetail: data}); //sending this data to front end
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            eror:e})
    }
    }
exports.deleteBookings=async(req,res,next)=>{

    const userId=req.params.id;
    console.log(`controller id isssss ${userId}`)
    
    try{
       
        if(req.params.id =='undefined')
        {
            console.log('ID is not found')
            return res.status(400).json({err: 'No ID match is found'})
        }
        await User.destroy({where: {id: userId}});
        res.sendStatus(200)
        console.log("Delete operation successfull !!!")
        
    }
    catch(e){
        console.log(e);
        res.status(500).json(e)
    }

}