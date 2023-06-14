import axios from 'axios';

const URL = 'https://react-native-course-2c84a-default-rtdb.firebaseio.com';

export const storeExpense = async (data) => {
  const response = await axios.post(URL + '/expenses.json', data);
  const generatedId = response.data.name;
  return generatedId;
};

export const fecthExpenses = async () => {
  const response = await axios.get(URL + '/expenses.json');
  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }

  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(URL + `/expenses/${id}.json`);
};
