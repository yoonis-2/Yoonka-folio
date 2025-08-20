function Footer() {
  return (
    <div>
        <footer className='bg-[#111A30] text-white pb-5'>
            <footer className="flex justify-between px-10 py-16">
                <div>
                    <h3 className="font-bold pb-3 text-2xl"><i class="fa-solid fa-code text-[#0B8CB9]"></i> Yoonka-code</h3>
                    <p>Professional portfolio showcasing innovative projects and <br /> technical expertise in modern web development.</p>
                </div>
                <div>
                    <h3  className="font-bold pb-3 text-2xl">Contact Information</h3>
                    <div className="flex gap-3">
                        <i class="fa-solid fa-phone text-2xl mt-2 text-[#0B8CB9]"></i>
                        <div>
                            <p className="text-[#9CA3AF]">Phone</p>
                            <h3>619832870</h3>

                        </div>
                    </div>
                </div>
                <div>
                    <h3  className="font-bold pb-3 text-2xl">Personal Information</h3>
                    <div className="flex gap-3">
                    <i class="fa-regular fa-envelope text-2xl mt-2 text-[#0B8CB9]"></i>
                    <div>
                        <p className="text-[#9CA3AF]">Email</p>
                        <h4>yoonkagallad2021@gmail.com</h4>
                    </div>
                    </div>
                </div>

            </footer>
        </footer>
    </div>
  )
}

export default  Footer
