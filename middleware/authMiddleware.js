export const checkAuth = (req, res, next) => {
    if (req.headers['authorization']) {
      next(); // Proceed to the next middleware or route handler
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  