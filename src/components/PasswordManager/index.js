import {Component} from 'react'
import {v4} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    addPasswordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    isCheckBox: false,
  }

  onDeletePasswordEntry = id => {
    const {addPasswordsList} = this.state
    const updatedaddPasswordsList = addPasswordsList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({
      addPasswordsList: updatedaddPasswordsList,
    })
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({isCheckBox: !prevState.isCheckBox}))
  }

  onAddPasswords = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPasswords = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(preState => ({
      addPasswordsList: [...preState.addPasswordsList, newPasswords],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {
      addPasswordsList,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      isCheckBox,
    } = this.state

    const searchResults = addPasswordsList.filter(eachSuggestion =>
      eachSuggestion.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="app-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="add-password-container">
          <div className="add-password">
            <h1 className="add-new-manager-heading">Add New Password</h1>
            <form onSubmit={this.onAddPasswords}>
              <div className="input-container">
                <img
                  className="input-image"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  type="text"
                  onChange={this.onChangeWebsiteInput}
                  className="input"
                  placeholder="Enter Website"
                  value={websiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  className="input-image"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  type="text"
                  onChange={this.onChangeUsernameInput}
                  className="input"
                  placeholder="Enter Username"
                  value={usernameInput}
                />
              </div>
              <div className="input-container">
                <img
                  className="input-image"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  type="password"
                  onChange={this.onChangePasswordInput}
                  className="input"
                  placeholder="Enter Password"
                  value={passwordInput}
                />
              </div>
              <div className="button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            className="add-password-image"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="bottom-container">
          <div className="output-password-container">
            <div className="your-password-container">
              <h1 className="add-new-manager-heading">Your Passwords</h1>
              <p className="password-list-counting">{searchResults.length}</p>
            </div>
            <div className="output-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-image"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                className="output"
                placeholder="Search"
                value={searchInput}
              />
            </div>
          </div>
          <hr className="horizontial-line" />
          <div className="output-middle-container">
            <input
              type="checkbox"
              className="checkbox-box"
              id="checkbox"
              onClick={this.onChangeCheckBox}
            />
            <label className="add-new-manager-heading" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {searchResults.length > 0 ? (
            <ul className="unorder-list">
              {searchResults.map(eachPasswords => (
                <PasswordManagerItem
                  key={eachPasswords.id}
                  eachPasswords={eachPasswords}
                  onDeletePasswordEntry={this.onDeletePasswordEntry}
                  isCheckBoxs={isCheckBox}
                />
              ))}
            </ul>
          ) : (
            <>
              <div className="empty-container">
                <img
                  className="empty-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
              </div>
              <p className="empty-paragraph">No Passwords</p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
