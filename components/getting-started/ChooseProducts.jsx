function ChooseProducts() {
    return (
        <section className=" bg-[#F4F4F4] p-4">
            <div className=" bg-white py-20">
                <div className="heading text-center max-w-4xl m-auto ">
                    <h2
                        className="mb-7 text-md font-bold text-bluedark leading-normal text-2xl lg:leading-[50px] lg:text-4xl"
                       >
                        Choose Our Products
                    </h2>
                    <p
                        className="text-center mb-10 text-md lg:text-xl text-para"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                </div>
                <div className="wrapper grid gap-5 md:gap-10 grid-cols-2 md:grid-cols-3">
                    <a href="#" className="grid gap-1 lg:gap-3 text-center py-5 shadow-md bg-white rounded-lg hover:shadow-xl transition hover:scale-110 border border-[#f1f1f1]">
                        <div className="max-w-[300px] m-auto ">
                            <div className=" bg-white rounded-md ">
                                <div className="p-3 py-3 relative w-full">
                                    <div className="">
                                        <img
                                            src="https://mylapay.com/assets/img/icons/s1.png"
                                            alt="project-8"
                                            className="w-16 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-[24px]">
                        Authentication
                        </p>
                    </a>
                    <a href="#" className="grid gap-3 text-center py-5 shadow-md bg-white rounded-lg hover:shadow-xl transition hover:scale-110 border border-[#f1f1f1]">
                        <div className="max-w-[300px] m-auto">
                            <div className=" bg-white rounded-md">
                                <div className="p-3 py-3 relative w-full">
                                    <div className="">
                                        <img
                                            src="https://mylapay.com/assets/img/icons/s3.png"
                                            alt="project-8"
                                            className="w-16 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-[24px]">
                        Authorization
                        </p>
                    </a>
                    <a href="#" className="grid gap-3 text-center py-5 shadow-md bg-white rounded-lg hover:shadow-xl transition hover:scale-110 border border-[#f1f1f1]">
                        <div className="max-w-[300px] m-auto">
                            <div className=" bg-white rounded-md">
                                <div className="p-3 py-3 relative w-full">
                                    <div className="">
                                        <img
                                            src="https://mylapay.com/assets/img/icons/s2.png"
                                            alt="project-8"
                                            className="w-16 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-[24px]">
                        Intellengine
                        </p>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default ChooseProducts