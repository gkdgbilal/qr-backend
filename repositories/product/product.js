import Product from '../../models/product.js';

export const createProductRow = async values => {
  return await Product.create(values);
};

export const getProductRow = async () => {
  return await Product.findAll({
    order: [['id', 'ASC']],
  });
};

export const getProductRowById = async id => {
  return await Product.findOne({ where: { id } });
};

export const updateProductRow = async (values, id) => {
  await Product.update(values, { where: { id } });
  return await Product.findOne({ where: { id } });
};

export const deleteProductRow = async id => {
  return await Product.destroy({ where: { id } });
};

export const getProductRowByProductName = async name => {
  return await Product.findOne({ where: { product_name: name } });
};
