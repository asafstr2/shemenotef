import React, { useState } from "react";

// import { Button, Typography, OutlinedInput } from "@mui/material";
// import { resetUserPassword } from "../../store/actions/auth";
// import { useDispatch } from "react-redux";
// const classes = {
//   root: {
//     width: "400px",
//     maxWidth: "100%",
//     border: "1px solid",
//     height: "300px",
//     position: "absolute",
//     top: "50%",
//     display: "flex",
//     transform: "translate(-50%, -50%)",
//     left: "50%",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     padding: "30px",
//     borderRadius: "10px",
//   },
//   title: {
//     textAlign: "center",
//     fontWeight: 600,
//   },
//   inputClass: {
//     borderRadius: 50,
//     background: "#f5f5f5",
//     "& > input": {
//       padding: "20px",
//       "&:-webkit-autofill": {
//         boxShadow: "0 0 0 30px #F5F5F5F5 inset",
//       },
//     },
//   },
//   btn: {
//     borderRadius: 50,
//     fontWeight: 600,
//     padding: 6,
//     width: "50%",
//     marginInline: "auto",
//   },
// };

// interface Props {
//   location: any;
//   history: any;
// }
// function Resetpassword({ location, history }: Props) {
//   const params = new URLSearchParams(location.search);
//   const [data, setData] = useState({ password: "", confirm: "" });
//   const dispatch = useDispatch();

//   function handleChange(e) {
//     setData({ ...data, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const { password, confirm } = data;
//     const token = params.get("token");
//     if (password !== confirm) {
//       console.log("Password dont match");
//       return;
//     }
//     dispatch(resetUserPassword({ token, password }));
//     dispatch({
//       type: "ADD_ERROR",
//       errors: "Password updated succesfully",
//       severity: "success",
//     });
//     history.push("/?login=true");
//   }

//   const inputProps = {
//     onChange: handleChange,
//     type: "text",
//     //@ts-ignore
//     style: classes.inputClass,
//   };
//   return (
//     <form
//       onSubmit={handleSubmit} //@ts-ignore
//       style={classes.root}
//     >
//       <Typography //@ts-ignore
//         style={classes.title}
//         variant="h5"
//       >
//         Reset password
//       </Typography>
//       <OutlinedInput
//         value={data.password}
//         {...inputProps}
//         name="password"
//         placeholder="Password"
//       />
//       <OutlinedInput
//         value={data.confirm}
//         {...inputProps}
//         name="confirm"
//         placeholder="Password Confirmation"
//       />
//       <Button
//         type="submit"
//         //@ts-ignore
//         style={classes.btn}
//         color="primary"
//         variant="contained"
//       >
//         Confirm
//       </Button>
//     </form>
//   );
// }

// export default Resetpassword;
