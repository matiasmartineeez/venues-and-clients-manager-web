import { unAuthAxiosCall } from "./axiosCall";

export const getVenues = async () =>
  unAuthAxiosCall("/venues/list", {
    method: "GET"
  });

export const addVenue = async name =>
  unAuthAxiosCall("/venues/add", {
    method: "POST",
    body: JSON.stringify({
      name
    })
  });

// export const register = async user =>
//   unAuthAxiosCall("/user", {
//     method: "POST",
//     body: JSON.stringify({
//       first_name: user.first_name,
//       last_name: user.last_name,
//       cellphone: user.phone_number,
//       email: user.email,
//       password: user.password
//     })
//   });
