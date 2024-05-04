import SubCategory from '../../models/subCategory.js';

export const createSubCategoryRow = async values => {
  return await SubCategory.create(values);
};

export const getSubCategoryRow = async () => {
  return await SubCategory.findAll({
    order: [['id', 'ASC']],
  });
};

export const getSubCategoryRowById = async id => {
  return await SubCategory.findOne({ where: { id } });
};

export const updateSubCategoryRow = async (values, id) => {
  await SubCategory.update(values, { where: { id } });
  return await SubCategory.findOne({ where: { id } });
};

export const deleteSubCategoryRow = async id => {
  return await SubCategory.destroy({ where: { id } });
};

export const getSubCategoryRowByCategoryName = async name => {
  return await SubCategory.findOne({ where: { sub_category_name: name } });
};

export const getSubCategoryRowByCategoryId = async id => {
  return await SubCategory.findAll({ where: { category_id: id } });
};
