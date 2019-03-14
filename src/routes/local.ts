import { Request, Response, Router } from "express";
import User from "../schemas/user";

const router: Router = Router();

router.post("/join", (req: Request, res: Response, error: any) => {
    try {
        const user = new User({
            email : req.body.email,
            password : req.body.password,
        });
        user.save((err: any) => {
            if (err) {
                console.log(err);
            } else {
                return res.send(user);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
