import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import OrderConfirmed from "../orderConfirmed/OrderConfirmed";
import { useNavigate } from "react-router-dom";

export default function PrintOut() {
  var authorization = localStorage.getItem("authorization")
  const [regNo, setRegNo] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [description, setDescription] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [printSide, setPrintSide] = useState("One side");
  const [colorType, setColorType] = useState("Black and White ( 2 rupee page)");
  const [pageSize, setPageSize] = useState("A4");
  const [isOrderDone, setIsOrderDone] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isUserLogin, setIsUserLogin] = useState(false);
  var navigate = useNavigate();

  const authcheck = () => {
    if(!authorization){
      navigate('/login')
    }
  };
  useEffect(() => {
    authcheck();
  }, []);

  const pricelist = {
    blackandwhiteAndbothside: 2,
    colorAndbothside: 5,
    blackandwhiteAndsingleside: 5,
    colorAndsingleside: 10,
  };
  useEffect(() => {
    console.log(totalPrice, numberOfPages, printSide, colorType);
    if (
      printSide == "One side" &&
      colorType == "Black and White (2 rupee page)"
    ) {
      setTotalPrice(numberOfPages * pricelist.blackandwhiteAndsingleside);
    } else if (
      printSide == "Both side" &&
      colorType == "Black and White (2 rupee page)"
    ) {
      setTotalPrice(numberOfPages * pricelist.blackandwhiteAndbothside);
    } else if (
      printSide == "One side" &&
      colorType == "Color Print (5 rupee per page)"
    ) {
      setTotalPrice(numberOfPages * pricelist.colorAndsingleside);
    } else {
      setTotalPrice(numberOfPages * pricelist.colorAndbothside);
    }
  }, [totalPrice, numberOfPages, printSide, colorType]);

  return (
    <>
      {isOrderDone ? (
        <OrderConfirmed />
      ) : (
        <div>
          {console.log(
            regNo,
            fullAddress,
            description,
            fileLink,
            numberOfPages,
            printSide,
            colorType,
            pageSize,
            isOrderDone
          )}
          <Header />
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 border-2 bg-[#F5F5F7]">
            <div className="mx-auto max-w-2xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (e.target.checkValidity()) {
                    setIsOrderDone(true);
                  }
                }}
              >
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Personal Information
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Use a permanent address where you can receive mail.
                      </p>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="reg"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            College Reg No
                          </label>
                          <div className="mt-2">
                            <input
                              id="reg"
                              name="reg"
                              type="text"
                              onChange={(e) => setRegNo(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="addressSelect"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Address Selection
                          </label>
                          <div className="mt-2">
                            <select
                              id="addressSelect"
                              name="addressSelect"
                              autoComplete="addressSelect"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option value="">Select an option</option>
                              <option>Class</option>
                              <option>Boys Hostel</option>
                              <option>Mayuri</option>
                              <option>Main Gate</option>
                              <option>Girls Hostel</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label htmlFor="full-address">
                            Enter full address ClassNo/RoomNo/Area
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="full-address"
                              id="full-address"
                              autoComplete="full-address"
                              value={fullAddress}
                              onChange={(e) => setFullAddress(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Printing Document Information
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label htmlFor="description">
                          Describe what you need
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="description"
                            name="description"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="cover-photo">
                          Document/File Google Drive Link
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <input
                              type="text"
                              name="file"
                              id="file"
                              autoComplete="file"
                              value={fileLink}
                              onChange={(e) => setFileLink(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-4">
                        <label htmlFor="number">Total Pages In Document</label>
                        <div className="mt-2">
                          <input
                            id="number"
                            name="number"
                            type="number"
                            value={numberOfPages}
                            onChange={(e) =>
                              setNumberOfPages(Number(e.target.value))
                            }
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="PrintSide">Print Side</label>
                        <div className="mt-2">
                          <select
                            id="PrintSide"
                            name="PrintSide"
                            autoComplete="PrintSide"
                            value={printSide}
                            onChange={(e) => setPrintSide(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option value="">Select an option</option>
                            <option>One side</option>
                            <option>Both side</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="colortype">Color type</label>
                        <div className="mt-2">
                          <select
                            id="colortype"
                            name="colortype"
                            autoComplete="colortype"
                            value={colorType}
                            onChange={(e) => setColorType(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option value="">Select an option</option>
                            <option>Black and White (2 rupee page)</option>
                            <option>Color Print (5 rupee per page)</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="pageSize">Page size</label>
                        <div className="mt-2">
                          <select
                            id="pageSize"
                            name="pageSize"
                            autoComplete="pageSize"
                            value={pageSize}
                            onChange={(e) => setPageSize(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option value="">Select an option</option>
                            <option>A4</option>
                            <option>A5</option>
                            <option>A3</option>
                            <option>A6</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Payment Mode
                        </legend>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              required
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Cash On Delivery
                            </label>
                            ::
                            <h2>Total Price = {totalPrice}Rs</h2>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


