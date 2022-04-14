import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {

  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employeeBody) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employeeBody);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
  }

  updateEmployeeById(employeeId, employeeBody){
    return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employeeBody);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
  }
}

export default new EmployeeService();