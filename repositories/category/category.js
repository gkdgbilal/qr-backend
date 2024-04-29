import Category from '../../models/category.js';

export const createCategoryRow = async values => {
  return await Category.create(values);
};

export const getCategoryRow = async () => {
  return await Category.findAll({
    order: [['id', 'ASC']],
  });
};

export const getCategoryRowById = async id => {
  return await Category.findOne({ where: { id } });
};

export const updateCategoryRow = async (values, id) => {
  await Category.update(values, { where: { id } });
  return await Category.findOne({ where: { id } });
};

export const deleteCategoryRow = async id => {
  return await Category.destroy({ where: { id } });
};

export const getCategoryRowByCategoryName = async name => {
  return await Category.findOne({ where: { category_name: name } });
};
