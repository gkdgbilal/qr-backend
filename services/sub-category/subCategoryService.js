import SubCategory from '../../models/subCategory.js';

export const createSubCategoryService = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOne({
      where: { id: req.body.id },
    });

    if (subCategory) {
      throw new Error('Sub Category already exists');
    }

    return await SubCategory.create(req.body);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getSubCategoryService = async (req, res) => {
  try {
    return await SubCategory.findAll();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getSubCategoryByIdService = async (req, res) => {
  try {
    const { id } = req.params;
    return await SubCategory.findOne({ where: { id } });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateSubCategoryService = async (req, res) => {
  try {
    const { id } = req.params;
    return await SubCategory.update(req.body, { where: { id } });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteSubCategoryService = async (req, res) => {
  try {
    const { id } = req.params;
    return await SubCategory.destroy({ where: { id } });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
