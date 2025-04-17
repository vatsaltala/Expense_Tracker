
const mailer=require("nodemailer")

const sendingmail= async(to,subject,text)=>{
    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:"vatsaltala806@gmail.com",
            pass:"vbqr hlsr bsaa oknh"
        }
    })
    const option={
        from:"vatsaltala806@gmail.com",
        to:to,
        subject:subject,
        text:text
    }
    const mailresponse =await transporter.sendMail(option)
    console.log(mailresponse)
    return mailresponse

    module.exports={sendingmail}

}