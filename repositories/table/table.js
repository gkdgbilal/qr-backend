import Table from '../../models/table.js';

export const createTableRow = async values => {
  return await Table.create(values);
};

export const getTableRow = async () => {
  return await Table.findAll({
    order: [['id', 'ASC']],
  });
};

export const getTableRowById = async id => {
  return await Table.findOne({ where: { id } });
};

export const updateTableRow = async (values, id) => {
  await Table.update(values, { where: { id } });
  return await Table.findOne({ where: { id } });
};

export const deleteTableRow = async id => {
  return await Table.destroy({ where: { id } });
};

export const getTableRowByTableName = async name => {
  return await Table.findOne({ where: { table_name: name } });
};
