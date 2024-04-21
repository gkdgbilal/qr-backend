import { db } from '../../connect.js';

//GET
export const getMenu = async (req, res) => {
  try {
    const res = await db.query('SELECT * FROM menus');
    console.log("selamlar");
    res.json(res.rows);
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
