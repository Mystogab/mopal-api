

const authCheck = (req, res, next) => {
  if (req.headers.token) {
    const token = req.headers.token;
    if (token === 'VALID') next();
    else {
    	res.status(401).json({ msg: 'Invalid Token!'});	
    }
  }
  else {
  	res.status(401).json({ msg: 'Non-provided Token!'});
  }
}

module.exports = { authCheck };
