import {
  createCategoryRow,
  deleteCategoryRow,
  getCategoryRow,
  getCategoryRowByCategoryName,
  getCategoryRowById,
  updateCategoryRow,
} from '../../repositories/category/category.js';

export const createCategory = async (req, res) => {
  try {
    const data = req.body;

    const isCategoryExist = await getCategoryRowByCategoryName(
      data.category_name
    );

    if (isCategoryExist) {
      throw new Error('Category already exists, please use another name');
    }

    const category = await createCategoryRow(data);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await getCategoryRow();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryRowById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await updateCategoryRow(data, id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCategoryRow(id);
    res.status(200).json({ msg: 'Category deleted' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
