import {
  createProductRow,
  deleteProductRow,
  getProductRowByProductName,
  getProductRow,
  getProductRowById,
  updateProductRow,
} from '../../repositories/product/product.js';

export const createProduct = async (req, res) => {
  try {
    const data = req.body;

    const isProductExist = await getProductRowByProductName(data.product_name);

    if (isProductExist) {
      throw new Error('Product already exists, please use another name');
    }

    const product = await createProductRow(data);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await getProductRow();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductRowById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const isProductExist = await getProductRowById(id);

    if (!isProductExist) {
      throw new Error('Product does not exist');
    }

    const data = req.body;
    const product = await updateProductRow(data, id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductRowById(id);

    if (!product) {
      throw new Error('Product does not exist');
    }

    await deleteProductRow(id);
    res.status(200).json({ msg: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
