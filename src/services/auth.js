const BASE_URL = 'https://norma.nomoreparties.space/api/auth';

// export const fetchPostPassword = (email) => {
//   return fetch(`${BASE_URL}/password-reset`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: email,
//       })
//   });
// }

// export const fetchPostLogin = ({email, password}) => {
//     return fetch(`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: email, 
//             password: password
//         })
//     });
//   }
  
//   export const fetchPostRegister = ({email, password, name}) => {
//     return fetch(`${BASE_URL}/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: email, 
//             password: password,
//             name: name
//         })
//     });
//   }