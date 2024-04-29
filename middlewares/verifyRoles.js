export const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const { roles } = req;

      if (!roles) {
        return res.status(403).json({
          message: 'Unauthorized: No roles found',
        });
      }

      const hasPermission = roles.some(role => allowedRoles.includes(role));
      if (!hasPermission) {
        return res.status(403).json({
          message:
            'Unauthorized: You do not have permission to access this resource',
        });
      }
      next();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
};
