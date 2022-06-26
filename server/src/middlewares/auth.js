import jwt from "jsonwebtoken";

import authConfig from "../config/auth";

export default async (req, res, next) => {
  const authenticated = false;

  if (authenticated) {
    return next();
  } else {
    return res.status(401).json();
  }
};
 