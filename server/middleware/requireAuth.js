import jwt from 'jsonwebtoken';

export const requireAuth = async (req, res, next) => {
    
    // verify authentication
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error: "authorization token ki jaruurat hai "})
    }

    const token = authorization.split(' ')[1];

    try{
        const decodedData = jwt.verify(token, process.env.SECRET_STRING);
        req.userID = decodedData?._id ;

        next()
    }
    catch(err){
        console.log( err );
        res.status(401).json({error: "unauthorized request"})
    }
}