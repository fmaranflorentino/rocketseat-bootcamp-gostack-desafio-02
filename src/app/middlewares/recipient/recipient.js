import * as Yup from 'yup';
import Recipient from '../../models/Recipient';

export const recipientValidateBody = async (req, res, next) => {
  const schema = Yup.object().shape({
    id: Yup.number().required(),
    name: Yup.string().required(),
    street: Yup.string().required(),
    number: Yup.number().required(),
    complement: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    postalCode: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Body schema is wrong' });
  }

  return next();
};

export const recipientExistsValidate = async (req, res, next) => {
  const { name } = req.body;

  const recipientExists = await Recipient.findOne({ where: { name } });

  if (recipientExists) {
    return res.status(400).json({ error: 'Recipient already registered!' });
  }

  return next();
};



