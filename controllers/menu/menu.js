import {
  getTableRowByTableName,
  updateTableRow,
} from '../../repositories/table/table.js';

export const getMenu = async (req, res) => {
  try {
    const { table, isOccupied } = req.query;
    console.log(table, isOccupied);
    if (!table) {
      throw new Error('Table not found!');
    }

    const tableDetail = await getTableRowByTableName(table);
    const updatedTable = await updateTableRow({ isOccupied }, tableDetail.id);

    res.json({
      msg: 'Menu fetched successfully',
      path: '/menu',
      table: updatedTable,
    });
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
