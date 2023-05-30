const axios = require("axios");

const getICD10 = async (req, res) => {
  const { terms } = req.body;
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?df=code,name&sf=code,name&terms=${terms}`,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      res.status(200).send({ data: response.data[3] });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

const getICD9 = async (req, res) => {
  const { terms } = req.body;
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://clinicaltables.nlm.nih.gov/api/icd9cm_sg/v3/search?terms=${terms}`,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      res.status(200).send({ data: response.data[3] });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

module.exports = {
  getICD10,
  getICD9,
};
