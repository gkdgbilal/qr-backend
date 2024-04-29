import { getCategoryRowById } from '../../repositories/category/category.js';
import {
  createSubCategoryRow,
  deleteSubCategoryRow,
  getSubCategoryRow,
  getSubCategoryRowByCategoryName,
  getSubCategoryRowById,
  updateSubCategoryRow,
} from '../../repositories/subCategory/subCategory.js';

export const createSubCategory = async (req, res) => {
  try {
    const data = req.body;
    const isSubCategoryExist = await getSubCategoryRowByCategoryName(
      data.sub_category_name
    );
    const isCategoryExist = await getCategoryRowById(data.category_id);

    if (!isCategoryExist) {
      throw new Error('Category does not exist');
    }

    if (isSubCategoryExist) {
      throw new Error('Sub Category already exists, please use another name');
    }

    const subCategory = await createSubCategoryRow(data);
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getSubCategory = async (req, res) => {
  try {
    const subCategories = await getSubCategoryRow();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategories = await getSubCategoryRowById(id);
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const subCategory = await updateSubCategoryRow(data, id);
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteSubCategoryRow(id);
    res.status(200).json({ msg: 'Sub Category deleted' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
