import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faPlaystation,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdGamepad } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [resetUser, setResetUser] = useState({
    email: "",
    newPassword: "",
    reEnterNewPassword: "",
  });

  const [showResetPopup, setShowResetPopup] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetUser({
      ...resetUser,
      [name]: value,
    });
  };

// const login = () => {
//   axios
//     .post("http://localhost:9002/login", user)
//     .then((res) => {
//       if (res.data.message === "User not registered") {
//         toast.warn("User not registered.");
//       } else if (res.data.message === "Password didn't match") {
//         toast.error("Password didn't match.");
//       } else if (res.data.message === "Login Successful") {
//         toast.success("Login successful!");
//         setLoginUser(res.data.user);
        
//         // Extracting necessary data for navigation
//         const { name, profileImage } = res.data.user;
        
//         setTimeout(() => {
//           // Navigate to PlayGames page with username and profileImageURL in state
//           navigate("/PlayGames", { state: { username: name, profileImageURL: `http://localhost:9002/uploads/${profileImage}` } });
//         }, 2000);
//       }
//     })
//     .catch((error) => {
//       console.error("Login failed:", error);
//       toast.error("Login failed. Please try again.");
//     });
// };

const login = async () => {
  try {
    const res = await axios.post("http://localhost:9002/login", user);
    if (res.data.message === "User not registered") {
      toast.warn("User not registered.");
    } else if (res.data.message === "Password didn't match") {
      toast.error("Password didn't match.");
    } else if (res.data.message === "Login Successful") {
      toast.success("Login successful!");
      setLoginUser(res.data.user);
      
      // Extracting necessary data for navigation
      const { name, profileImage } = res.data.user;
      
      setTimeout(() => {
        // Navigate to PlayGames page with username and profileImageURL in state
        navigate("/PlayGames", { state: { username: name, profileImageURL: `http://localhost:9002/uploads/${profileImage}` } });
      }, 2000);
    }
  } catch (error) {
    console.error("Login failed:", error);
    toast.error("Login failed. Please try again.");
  }
};


  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setShowResetPopup(true);
  };

  const handleCloseResetPopup = () => {
    setShowResetPopup(false);
  };

  const handleResetPasswordSubmit = () => {
    const hasUppercase = /[A-Z]/.test(resetUser.newPassword);
    const hasNumber = /\d/.test(resetUser.newPassword);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      resetUser.newPassword
    );
    const isValidLength = resetUser.newPassword.length >= 7;

    if (!hasUppercase || !hasNumber || !hasSpecialChar || !isValidLength) {
      console.warn(
        "Password must contain at least one uppercase letter, one number, one special character, and have a minimum length of 7 characters."
      );
      return;
    }

    axios
    .post("http://localhost:9002/reset-password", {
      email: resetUser.email,
      newPassword: resetUser.newPassword,
    })
    .then((res) => {
      if (res.data.message === "Password reset successful") {
        console.log("Password reset successful"); // Log success message to console
        setShowResetPopup(false); // Close the popup
      } else {
        console.error("Password reset failed:", res.data.message); // Log failure message to console
      }
    })
    .catch((error) => {
      console.error("Password reset failed:", error);
    });
  };

  return (
    <div className={`login-container ${showResetPopup ? "blur" : ""}`}>
      <header>
        <nav className="navbar navbar-expand-lg navigation-wrap">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                className="logo-img"
                src="img/logo.png"
                alt=""
                loading="lazy"
              />
              <span id="hustler">Hustlers</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ft">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Body section */}
      <div className="body7">
        <section id="home">
          <div className="container-fluid px-0 top-banner4 mb-5">
            <div className="b4">
              <SiGnuprivacyguard /> LogIn Here <MdGamepad />
            </div>
            <div className="gif-sign">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_i9arxzcg.json"
                background="transparent"
                speed={1}
                style={{ width: "350px", height: "300px" }}
                loop
                autoPlay
              />
            </div>
            <div id="Signup"></div>
          </div>
        </section>
      </div>

      {/* Login form section */}
      <section>
        <h1 className="user_title">Welcome Back Gamers</h1>
        <h2 className="title34">
          Good to see you back.. <span> Please login to continue. </span>{" "}
        </h2>{" "}
        <div className="container-login-2">
          <div className="leftlogin-12">
            <form method="post" action className="form-login glass">
              <label htmlFor="email">Enter your email: </label>
              <div className="password-input-container">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <AiOutlineMail className="password-eye-icon" size={20} />
              </div>
              <label htmlFor="password">Enter your Password: </label>
              <div className="password-input-container">
                <input
                  className="form-control"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={user.password}
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
                <AiOutlineEye
                  className="password-eye-icon"
                  onClick={togglePasswordVisibility}
                  size={20}
                />
              </div>

              <button
                type="button"
                className="sign_up button1 signbutton1"
                onClick={login}
              >
                Login
              </button>
              <p className="mt-2 text-info">Forgot your password ?</p>
              <button className="signbutton2" onClick={handleResetPassword}>
                Reset your password
              </button>
            </form>
          </div>
          <div className="rightlogin-12">
            <img
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img6.png"
              alt=" "
            />
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </section>

      {/* Password reset popup */}

      {showResetPopup && (
        <div className="popup-container">
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPasswordSubmit}>
            <label htmlFor="email">Enter your email: </label>
            <div className="password-input-container">
              <input
                className="form-control"
                type="email"
                name="email"
                value={resetUser.email}
                placeholder="Email"
                required
                onChange={handleResetChange}
              />
              <AiOutlineMail className="password-eye-icon" size={20} />
            </div>
            <label htmlFor="password">New Password: </label>
            <div className="password-input-container">
              <input
                className="form-control"
                type={passwordVisible ? "text" : "password"}
                name="newPassword"
                value={resetUser.newPassword}
                placeholder="Password"
                required
                onChange={handleResetChange}
              />
              <AiOutlineEye
                className="password-eye-icon"
                onClick={togglePasswordVisibility}
                size={20}
              />
            </div>
            <label htmlFor="email">Re-enter New Password: </label>
            <div className="password-input-container">
              <input
                className="form-control"
                type="password"
                name="reEnterNewPassword"
                value={resetUser.reEnterNewPassword}
                placeholder="Re-password"
                required
                onChange={handleResetChange}
              />
              <AiOutlineLock className="password-eye-icon" size={20} />
            </div>
            <button type="re-submit">Submit</button>
            <button type="re-button" onClick={handleCloseResetPopup}>
              Close
            </button>
          </form>
        </div>
      )}
    
      {/* Semi-transparent overlay */}
      {showResetPopup && (
        <div className="overlay2" onClick={handleCloseResetPopup} />
      )}

      <footer id="footer">
      <div className="footer py-5 mt-1">
        <div className="container">
          <div className="row">
          <div className="col-md-12 text-center">

      <div className="footer-social pt-4 text-center">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPlaystation} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSteam} />
        </a>
      </div>
    </div>
            <div className="col-sm-12">
              <div className="footer-copy">
                <div className="copy-right text-center">
                  <p className="text-light">
                    Copyright © 2022. All Rights Reserved By{" "}
                    <span className="text-danger bg-light">
                      @GamingHustlers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Login;
