module.exports={
    db:{
        connectString:'mongodb://ranjan:ranjan@78@mongodb/transport'
    },
    server:{
        port:process.env.OPENSHIFT_NODEJS_PORT
    }
}