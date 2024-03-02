import React from 'react';


const LoginPage = () => {
  return (
    <div style={styles.loginPage}>
      <div style={styles.googleLogo}>
        <img src="https://cdn-icons-png.flaticon.com/128/11516/11516196.png" alt="Google Logo" />
      </div>
      <div style={styles.loginContainer}>
        <h2>Sign in</h2>
        <p>to continue to YouTube</p>
        <div style={styles.productCard}>
          <div style={styles.search}>
            <input type="text" placeholder="Search" style={styles.input} />
            <button style={styles.button}>Search</button>
          </div>
        </div>
        <div style={styles.forgotEmail}>
          <a href="/">Forgot email?</a>
        </div>
        <div style={styles.guestMode}>
          <p>Not your computer? Use Guest mode to sign in privately. <a href="/">Learn more about using Guest mode</a></p>
        </div>
        <div style={styles.language}>
          <select style={styles.select}>
            <option value="en-GB">English (UK)</option>
            <option value="en-US">English (United States)</option>
            <option value="en-IN">English (India)</option>
          </select>
        </div>
        <div style={styles.help}>
          <a href="/">Help</a>
        </div>
        <div style={styles.footerLinks}>
          <a href="/">Privacy</a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="/">Terms</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loginPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  googleLogo: {
    marginBottom: '20px',
  },
  loginContainer: {
    width: '350px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  forgotEmail: {
    marginBottom: '10px',
  },
  guestMode: {
    marginBottom: '10px',
  },
  language: {
    marginBottom: '10px',
  },
  select: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  help: {
    marginBottom: '10px',
  },
  footerLinks: {
    marginTop: '20px',
  },
};

export default LoginPage;
