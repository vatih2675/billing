const Button = ({click, color, title, icon}) => {
  return (
    <button onClick={click} className={`px-2 py-1 bg-gradient-to-b ${color} hover:bg-gradient-to-t rounded-md transition-all duration-300 hover:shadow-md text-white/60 hover:text-white`}>
        <i className={`bi-${icon} me-1`}></i>
        {title}
    </button>
  )
}

export default Button
