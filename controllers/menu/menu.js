//GET
export const getMenu = async (req, res) => {
  try {
    res.json('Get Menu');
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
