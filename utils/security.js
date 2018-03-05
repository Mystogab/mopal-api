

const authCheck = (req, res, next) => {
  if (req.headers.token) {
    const token = req.headers.token;
    if (token === 'VALID') next();
    res.status(401).json({ msg: 'Invalid Token!'});
  }
  res.status(401).json({ msg: 'Non-provided Token!'});
}

module.exports = { authCheck };
