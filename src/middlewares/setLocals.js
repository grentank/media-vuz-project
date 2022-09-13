export default function setLocals(req, res, next) {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session?.user;
  next();
}
