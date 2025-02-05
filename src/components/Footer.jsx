const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#4e3629] mt-24">
        <div className="w-full h-[1px] bg-lightBrown" />
        <div className="flex justify-center mt-8">
            <p className="text-sm text-[#f3e1c7] mb-10">© {currentYear} Mohammed Alazami | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer