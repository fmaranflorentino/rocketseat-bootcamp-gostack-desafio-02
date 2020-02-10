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

  async update(req, res) {
    const { id } = req.body;
    const recipient = await Recipient.findOne({ where: { id } });

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      postalCode,
    } = await recipient.update(req.body);

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
