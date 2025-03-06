import jwt from 'jsonwebtoken'

export default function authenticate(req, res, next){
    console.log("inside Authenticate -------", req.cookies)
    jwt.verify( req.cookies.usertoken, process.env.FIRST_SECRET_KEY, (err, payload) => {
        if(err){
            res.status(401).json( { verified: false } );
        }else{
            next();
        }
    })
}
