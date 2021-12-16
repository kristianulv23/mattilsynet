const Heading = ({level = "h1", text, children}) => {
  const HeadingLevel = level;

  if (!children) {
    return <HeadingLevel className="heading">{text}</HeadingLevel>
  }

  return (
    <div>
      <HeadingLevel className="heading--help-text">{text}</HeadingLevel>
      {children && 
        <p className="heading__help-text">{children}</p>
      }
    </div>
  )
}

export default Heading;
