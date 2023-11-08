import './index.css'

const PasswordManagerItem = props => {
  const {eachPasswords, onDeletePasswordEntry, isCheckBoxs} = props
  const {website, username, password, id} = eachPasswords
  const onDeletePassword = () => {
    onDeletePasswordEntry(id)
  }

  return (
    <li className="list-items">
      <div className="paragraph-container">
        <p className="web-paragraph">{website}</p>
        <p className="web-paragraph">{username}</p>
        {isCheckBoxs ? (
          <p className="web-paragraph">{password}</p>
        ) : (
          <img
            className="star-image"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
      </div>
      <button
        className="delete-button"
        onClick={onDeletePassword}
        type="button"
        data-testid="delete"
      >
        <img
          className="delete-logo"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        />
      </button>
    </li>
  )
}

export default PasswordManagerItem
