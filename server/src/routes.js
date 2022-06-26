import { Router } from "express";
import { route } from "express/lib/router";
import auth from "./middlewares/auth";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import RepositoryController from "./controllers/RepositoryController";

const routes = new Router();

routes.get("/hello", HelloController.index);

//routes.use(auth);

routes.get("/user", UsersController.index);
routes.get("/user/:id", UsersController.show);
routes.post("/user", UsersController.create);
routes.put("/user/:id", UsersController.update);
routes.delete("/user/:id", UsersController.destroy);

routes.get("/user/:user_id/repository", RepositoryController.index);
routes.post("/user/:user_id/repository", RepositoryController.create);
routes.delete("/user/:user_id/repository/:id", RepositoryController.destroy);

export default routes;
