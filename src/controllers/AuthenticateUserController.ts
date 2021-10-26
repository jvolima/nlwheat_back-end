import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthenticateUserService();
    try{
      const result = await service.execute(code);
      return response.json(result);
    } catch(err){ 
      return response.json(err);
    }
  }
}

export { AuthenticateUserController }