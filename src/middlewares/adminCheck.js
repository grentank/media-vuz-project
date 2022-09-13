export default function adminCheck(req, res, next) {
  if (req.session?.user?.admin) {
    next();
  } else {
    res.redirect('/');
  }
}
