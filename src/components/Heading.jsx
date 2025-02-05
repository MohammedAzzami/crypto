const Heading = ({className, title}) => {
  return (
    <div className={`${className} mx-auto mb-12 lg:mb-20 max-w-[50rem]`}>
        {title && <h1 className="h1">{title}</h1>}
    </div>
  )
}

export default Heading