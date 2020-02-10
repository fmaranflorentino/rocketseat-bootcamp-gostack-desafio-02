import Recipient from '../models/Recipient';

class RecipientsController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      postalCode,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      postalCode,
    });
  }
}

export default new RecipientsController();
