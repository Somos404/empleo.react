import axios from 'axios'
import authHeader from './AuthHeader'
import API_URL from '../constant/apiUrl'
const headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  "Access-Control-Allow-Origin": "*",
}
class UserService {

  sendMails(body) {
    try {
      return axios.post(API_URL + 'mail/contact',
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  
  sendMailsInscripcion(body) {
    try {
      return axios.post(API_URL + 'mail/inscripcion-contacto',
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  getCursos() {
    try {
      return axios.get(API_URL + 'cursosAndCategias', {
          headers: headers
      }).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  getMuni() {
    try {
      return axios.get(API_URL + 'muni', {
          headers: headers
      }).then(response => {
        return response.data.res;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  sendMailsEmpresa(body) {
    try {
      return axios.post(API_URL + 'mail/contactEmpresa',
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

}
export default new UserService();