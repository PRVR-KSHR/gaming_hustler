import React, { useState, useEffect } from "react";
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
import { SiGnuprivacyguard } from "react-icons/si";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineEye,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
} from "react-icons/ai";
import { MdGamepad } from "react-icons/md";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    profileImage: null, // Add profileImage state to store uploaded image
  });

  const [passwordInstructions, setPasswordInstructions] = useState({
    minLength: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const [passwordValid, setPasswordValid] = useState(false);
  const [showPasswordInstructions, setShowPasswordInstructions] =
    useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage" && files.length > 0) {
      const file = files[0];
      // Check if the file size is greater than 200kb
      if (file.size > 200 * 1024) {
        toast.warn("Profile image size should be less than 200kb.");
        return;
      }
    }

    setUser((prevState) => ({
      ...prevState,
      [name]: name === "profileImage" ? files[0] : value,
    }));

    // Check password validity
    if (name === "password" || name === "reEnterPassword") {
      checkPasswordValidity(
        name === "password" ? value : user.password,
        name === "reEnterPassword" ? value : user.reEnterPassword
      );
    }

    // Show password instructions when user starts entering password
    if (name === "password" && !showPasswordInstructions) {
      setShowPasswordInstructions(true);
    }
  };

  const checkPasswordValidity = (password, reEnterPassword) => {
    // Regular expressions for password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );
    const isValidLength = password.length >= 7;

    const newInstructions = {
      minLength: isValidLength,
      uppercase: hasUppercase,
      number: hasNumber,
      specialChar: hasSpecialChar,
    };

    setPasswordInstructions(newInstructions);

    // Check if all conditions are met
    const isValidPassword = Object.values(newInstructions).every(
      (instruction) => instruction
    );
    const isPasswordsMatching = password === reEnterPassword;

    setPasswordValid(isValidPassword && isPasswordsMatching);
  };

  const handleSignup = () => {
    const { name, email, password, reEnterPassword, profileImage } = user;
    // Create form data object to send with axios
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("reEnterPassword", reEnterPassword);
    formData.append("profileImage", profileImage);
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/Signup", formData).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid input");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default behavior of the Enter key
        handleSignup();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleSignup]);

  return (
    <div>
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

      <div className="body7">
        <section id="home">
          <div className="container-fluid px-0 top-banner4 mb-5">
            <div className="b4">
              <SiGnuprivacyguard /> SignUp Here <MdGamepad />
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

      <section>
        <h1 className="user_title">Welcome Gamers</h1>
        <h2 className="title34">
          To Participate in any E-sport events.{" "}
          <span> Please create your account over here.. </span>{" "}
        </h2>{" "}
        <div className="container-second">
          <div className="leftpanel-1">
            <form method="post" action className="form glass">
              <div className="profile-image-section">
                {user.profileImage && (
                  <div className="profile-image-circle">
                    <img
                      src={URL.createObjectURL(user.profileImage)}
                      alt="profile"
                      className="profile-image"
                    />
                  </div>
                )}
                <label htmlFor="profileImage">Profile Image:</label>
                <input
                  className="choose-file"
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="name">User Name: </label>
              <div className="password-input-container">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
                <AiOutlineUser
                  className="password-eye-icon"
                  onClick={togglePasswordVisibility}
                  size={20}
                />
              </div>
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
                  required=""
                  onChange={handleChange}
                />
                <AiOutlineEye
                  className="password-eye-icon"
                  onClick={togglePasswordVisibility}
                  size={20}
                />
              </div>
              {showPasswordInstructions && passwordInstructions && (
                <div className="password-instructions">
                  <ul>
                    <li
                      style={{
                        color: passwordInstructions.minLength ? "green" : "red",
                      }}
                    >
                      Password should be at least 7 characters long.
                    </li>
                    <li
                      style={{
                        color: passwordInstructions.uppercase ? "green" : "red",
                      }}
                    >
                      Password should contain at least one uppercase letter.
                    </li>
                    <li
                      style={{
                        color: passwordInstructions.number ? "green" : "red",
                      }}
                    >
                      Password should contain at least one number.
                    </li>
                    <li
                      style={{
                        color: passwordInstructions.specialChar
                          ? "green"
                          : "red",
                      }}
                    >
                      Password should contain at least one special character.
                    </li>
                  </ul>
                </div>
              )}
              <label htmlFor="reEnterPassword">Re-Enter your Password: </label>
              <div className="password-input-container">
                <input
                  className="form-control"
                  type="password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  placeholder="re-enter Password"
                  required
                  onChange={handleChange}
                />
                <AiOutlineLock className="password-eye-icon" size={20} />
              </div>
              <button
                type="button"
                className="sign_up button1 signbutton1"
                onClick={handleSignup}
              >
                Sign Up
              </button>
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
              <p className="mt-2 text-info">Already have an Account?</p>
              <button
                className="signbutton2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </form>
          </div>
          <div className="rightpanel-1">
            <img
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-9.png"
              alt="panelimg"
            />
          </div>
        </div>
      </section>
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
export default Signup;
