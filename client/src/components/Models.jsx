import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiSave } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";



export function DeleteModel({ mod,id }) {
    const [loader, setLoader] = useState(false);
    const reloadPage = () => {
        window.location.reload();
      };


    const hendleDelete=async()=>{
        setLoader(true);
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/deleteProducts/${id}`).then
        (()=>{
            setLoader(false);
            toast.success("Product Deleted Successfuly");
            reloadPage();
        })
        .catch((e)=>{
            setLoader(false)
            console.log(e);
            toast.error("Server Error")
        })
    }


    return (
        <div
            className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
            onClick={() => {
                mod();
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
            <div onClick={(e) => e.stopPropagation()} className="w-[80%] md:w-[60%] custon-shadow rounded-2xl px-10 bg-white flex flex-col p-2 xxxs:px-6 md:py-8 lg:py-12 py-8 gap-10  modelAnimation" >
                <div className="flex w-full justify-between h-fit items-center relative">
                    <h1 className="md:text-3xl ss:text-2xl xxs:text-xl text-lg sm:mr-5 font-[500] text-[#ff054f]">
                        Confirm Delete This Product Permanently!
                    </h1>
                    <RxCross2
                        className="xxs:relative sm:absolute absolute text-[2rem] xxxs:text-[2rem] xxs:text-[4rem] ss:text-[50px] sm:text-[2rem] sm:top-[-1rem] sm:right-[-0.5rem] cursor-pointer top-[-1rem] xxs:top-[-1rem] md:top-[-1.8rem] right-[-0.5rem] xxs:right-0"
                        onClick={() => {
                            mod();
                        }}
                    />
                </div>
                <p className="text-[14px] text-[#8f8f8f] font-[500]">
                    <b>NOTE-</b>&nbsp;Once The Product is deletey can not be recovered
                    back conform if you want to delete This Product permanently..
                </p>
                <div className="flex w-full gap-2 xs:gap-5">
                    <button disabled={loader} onClick={() => { mod();hendleDelete(); }} className="border-[#ff054f] w-fit border-[1px] rounded-[7px] py-[3px] px-[10px] xxxs:px-[14px] text-[#ff054f] text-[11px] xxxs:text-[14px] md:text-[16px] font-[500] hover:bg-[#ff054f] hover:text-[white] transition-colors  ">
                        Delete Premanently
                    </button>
                    <button
                        onClick={() => {
                            
                            mod();
                        }}
                        className="border-[#ff054f] w-fit border-[1px] rounded-[7px] py-[3px] px-[10px] text-[#ff054f] text-[11px] xxxs:text-[14px] md:text-[16px] font-[500] hover:bg-[#ff054f] hover:text-[white] transition-colors "
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}


export function EditProd({ pro, mod }) {

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);

    const reloadPage = () => {
        window.location.reload();
      };



    const [productName, setProductName] = useState(pro.name);
    const [price, setPrice] = useState(pro.price);
    const [stock, setStock] = useState(pro.stock);
    const [imgUrl, setImgUrl] = useState(pro);
    const [category, setCategory] = useState(pro.category);
    const [proDis, setProDis] = useState(pro.discription);


    const updateProduct = () => {
        if (productName.trim() === "") {
            toast.error("Product Name Can't be empty or null");
        }
        else if (price === 0) {
            toast.error("Product Price Can't be Zero")
        }
        else if (imgUrl.trim() === "") {
            toast.error("Please Provide a valid URL")
        }
        else if (proDis.trim() === "") {
            toast.error("Product discription Can't be empty or null")
        }
        else {
            setLoader(true);
            axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/updateProducts/${pro._id}`, {
                name: productName,
                discription: proDis,
                image: {
                    public_id: "Sample Id",
                    url: imgUrl
                },
                stock: stock,
                category: category,
                price: price
            }).then(() => {
                setLoader(false);
                toast.success("Product updated");
                reloadPage();
            }).catch((e) => {
                setLoader(false);
                console.log(e);
                toast.error("Server Error")
            })
        }
    }



    return (
        <div
            className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
            onClick={() => {
                mod();
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
            <div
                className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between w-[90%] items-center relative">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#18181B]">
                        Edit Product Information
                    </h1>
                    <RxCross2
                        className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
                        onClick={() => {
                            mod();
                        }}
                    />
                </div>
                <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                    <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center gap-1 xxxs:gap-6">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Product Name
                            </label>
                            <textarea
                                name="message"
                                value={productName}
                                onChange={(e) => { setProductName(e.target.value) }}
                                className=" text-[0.9rem] h-[3rem]  resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            ></textarea>
                        </div>

                    </div>
                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="message"
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                                rows="2"
                                className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            />
                        </div>

                    </div>
                </div>

                <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0  items-center">
                        <div className="w-full md:w-[80%]">

                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                            <select
                                name="status"
                                rows="2"
                                value={category}
                                id="EduGrade"
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className=" text-[0.9rem] h-[3rem] w-full  resize-none border border-gray-300 rounded-md px-4 py-2 block focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            >
                                <option value="Moblie">Mobile</option>
                                <option value="Laptop">Laptop</option>
                                <option value="accessories">Accessories</option>

                            </select>
                        </div>

                    </div>

                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Stock
                            </label>
                            <input
                                type="number"
                                name="message"
                                value={stock}
                                onChange={(e) => { setStock(e.target.value) }}
                                rows="2"
                                className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[89%] mt-4 md:mt-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Image URL:
                    </label>
                    <input
                        name="message"
                        rows="4"
                        value={imgUrl}
                        onChange={(e) => { setImgUrl(e.target.value) }}
                        className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
                    />
                </div>
                <div className="w-[89%] mt-4 md:mt-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Edit Description
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        value={proDis}
                        onChange={(e) => { setProDis(e.target.value) }}
                        className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
                    ></textarea>
                </div>




                <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
                    <button
                        onClick={() => {
                            mod();
                        }}
                        className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
                    >
                        <MdOutlineCancel size={20} /> Discard
                    </button>
                    <button
                        disabled={loader}
                        onClick={() => { updateProduct(); mod(); }}
                        className="bg-[#18181B]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
                    >
                        <BiSave size={20} /> Save the changes
                    </button>
                </div>
            </div>
        </div >
    )
}


export function AddProd({ mod }) {

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const reloadPage = () => {
        window.location.reload();
      };



    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(1);
    const [imgUrl, setImgUrl] = useState("");
    const [category, setCategory] = useState("Moblie");
    const [proDis, setProDis] = useState("");


    const updateProduct = () => {
        if (productName.trim() === "") {
            toast.error("Product Name Can't be empty or null");
        }
        else if (price === 0) {
            toast.error("Product Price Can't be Zero")
        }
        else if (imgUrl.trim() === "") {
            toast.error("Please Provide a valid URL")
        }
        else if (proDis.trim() === "") {
            toast.error("Product discription Can't be empty or null")
        }
        else {
            setLoader(true);
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/createProduct`, {
                name: productName,
                discription: proDis,
                image: {
                    public_id: "Sample Id",
                    url: imgUrl
                },
                stock: stock,
                category: category,
                price: price
            }).then(() => {
                setLoader(false);
                toast.success("Product Created");
                reloadPage()
            }).catch((e) => {
                setLoader(false);
                console.log(e);
                toast.error("Server Error")
            })
        }
    }



    return (
        <div
            className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
            onClick={() => {
                mod();
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
            <div
                className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between w-[90%] items-center relative">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#18181B]">
                        Add A New Product
                    </h1>
                    <RxCross2
                        className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
                        onClick={() => {
                            mod();
                        }}
                    />
                </div>
                <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                    <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center gap-1 xxxs:gap-6">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Product Name
                            </label>
                            <textarea
                                name="message"
                                value={productName}
                                onChange={(e) => { setProductName(e.target.value) }}
                                className=" text-[0.9rem] h-[3rem]  resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            ></textarea>
                        </div>

                    </div>
                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="message"
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                                rows="2"
                                className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            />
                        </div>

                    </div>
                </div>

                <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0  items-center">
                        <div className="w-full md:w-[80%]">

                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                            <select
                                name="status"
                                rows="2"
                                value={category}
                                id="EduGrade"
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className=" text-[0.9rem] h-[3rem] w-full  resize-none border border-gray-300 rounded-md px-4 py-2 block focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            >
                                <option value="Moblie">Mobile</option>
                                <option value="Living Room">Living Room</option>
                                <option value="Laptop">Laptop</option>
                                <option value="accessories">Accessories</option>

                            </select>
                        </div>

                    </div>

                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Stock
                            </label>
                            <input
                                type="number"
                                name="message"
                                value={stock}
                                onChange={(e) => { setStock(e.target.value) }}
                                rows="2"
                                className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[89%] mt-4 md:mt-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Image URL:
                    </label>
                    <input
                        name="message"
                        rows="4"
                        value={imgUrl}
                        onChange={(e) => { setImgUrl(e.target.value) }}
                        className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
                    />
                </div>
                <div className="w-[89%] mt-4 md:mt-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Edit Description
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        value={proDis}
                        onChange={(e) => { setProDis(e.target.value) }}
                        className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
                    ></textarea>
                </div>




                <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
                    <button
                        onClick={() => {
                            mod();
                        }}
                        className="hover:bg-[#0c0d10] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
                    >
                        <MdOutlineCancel size={20} /> Discard
                    </button>
                    <button
                        disabled={loader}
                        onClick={() => { updateProduct(); mod(); }}
                        className="bg-[#18181B]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
                    >
                        <BiSave size={20} /> Save the changes
                    </button>
                </div>
            </div>
        </div >
    )
}