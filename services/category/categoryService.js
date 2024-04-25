import Category from '../../models/category';

export const createCategoryService = async values => {
  try {
    const category = await Category.findOne({
      where: { id: values.id },
    });

    if (category) {
      throw new Error('Category already exists');
    }

    return await Category.create(values);
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategoryService = async () => {
  try {
    return await Category.findAll();
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategoryByIdService = async id => {
  try {
    return await Category.findOne({ where: { id } });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCategoryService = async (values, id) => {
  try {
    return await Category.update(values, { where: { id } });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCategoryService = async id => {
  try {
    return await Category.destroy({ where: { id } });
  } catch (error) {
    throw new Error(error);
  }
};
