import {
  clearCartRow,
  createCartRow,
  deleteCartRow,
  getCartRowById,
  getCartRowByUserId,
  updateCartRow,
} from '../../repositories/cart/cart.js';

export const createCart = async (req, res) => {
  try {
    const data = req.body;

    const isCartExist = await getCartRowByUserId(data.user_id);

    if (isCartExist.length > 0) {
      await updateCartRow(data, isCartExist[0].id);
      const cart = await getCartRowByUserId(data.user_id);
      res.status(200).json(cart);
    }

    const cart = await createCartRow(data);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { id } = req.params;

    const isCartExist = await getCartRowById(id);

    if (!isCartExist) {
      throw new Error('Cart does not exist');
    }

    const data = req.body;
    const cart = await updateCartRow(data, id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await getCartRowById(id);

    if (!cart) {
      throw new Error('Cart does not exist');
    }

    await deleteCartRow(id);
    res.status(200).json({ msg: 'Cart deleted successfully' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    await clearCartRow();
    res.status(200).json({ msg: 'Cart cleared successfully' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getCartByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await getCartRowByUserId(user_id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
