import { Request, Response } from "express";
import { RemoveItemOrderService } from "../../services/order/RemoveItemOrderService";

class RemoveItemOrderController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string

    const removeItemOrderService = new RemoveItemOrderService();
    const result = await removeItemOrderService.execute(item_id);

    return res.json(result);
  }
}

export { RemoveItemOrderController }; 
