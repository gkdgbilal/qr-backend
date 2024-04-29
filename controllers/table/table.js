import {
  createTableRow,
  deleteTableRow,
  getTableRow,
  getTableRowById,
  getTableRowByTableName,
  updateTableRow,
} from '../../repositories/table/table.js';

export const createTable = async (req, res) => {
  try {
    const data = req.body;
    const isTableExist = await getTableRowByTableName(data.table_name);

    if (isTableExist) {
      throw new Error('Table already exists, please use another name');
    }

    const table = await createTableRow(data);
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getTables = async (req, res) => {
  try {
    const tables = await getTableRow();
    res.status(200).json(tables);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getTableById = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await getTableRowById(id);
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateTable = async (req, res) => {
  try {
    const { id } = req.params;

    const isTableExist = await getTableRowById(id);

    if (!isTableExist) {
      throw new Error('Table does not exist');
    }

    const data = req.body;
    const table = await updateTableRow(data, id);
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTable = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await getTableRowById(id);

    if (!table) {
      throw new Error('Table does not exist');
    }

    await deleteTableRow(id);
    res.status(200).json({ msg: 'Table deleted successfully' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
