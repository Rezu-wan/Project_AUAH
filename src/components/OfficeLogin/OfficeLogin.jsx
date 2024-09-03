const OfficeLogin = () => {
  // function refreshPage() {
  //   window.location.reload(false);
  // }
  return (
    <div>
      <div className="border-2 border-[hsl(73,76%,52%)]"></div>
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-[#5da5f8] to-[#2b82e4] min-h-screen flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-8 w-full">
          <div className="card bg-white w-full max-w-2xl shrink-0 shadow-2xl rounded-lg">
            <form className="card-body gap-5 bg-[#f4f8ff] rounded-lg">
              {/* Full Name and ID */}
              <h1 className="text-center font-bold font-serif text-2xl underline">
                Student Information
              </h1>
              <div className="flex md:flex-row flex-col md:gap-5 justify-between gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Full Name:
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Student full name"
                    className="input input-bordered input-primary focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Full ID:
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Student full ID"
                    className="input input-bordered input-primary focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                    required
                  />
                </div>
              </div>

              {/* Department, Batch, Blood */}
              <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-between">
                {/* Department Selection */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-gray-700">
                      Department:
                    </span>
                  </label>
                  <select className="select select-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm focus:outline-none">
                    <option disabled selected>
                      Select Department
                    </option>
                    <option>CSE</option>
                    <option>ME</option>
                    <option>EEE</option>
                    <option>BBA</option>
                    <option>LAW</option>
                  </select>
                </div>

                {/* Blood Group Selection */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-gray-700">
                      Blood Group:
                    </span>
                  </label>
                  <select className="select select-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm focus:outline-none">
                    <option disabled selected>
                      Select Blood Group
                    </option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                {/* Batch Input */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-gray-700">
                      Batch:
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Batch"
                    className="input w-full border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm focus:outline-none border-[#d4d4d4] focus:bg-[#f0f0f0] "
                    required
                  />
                </div>
              </div>

              {/* Student Number and Student mail */}
              <div className="flex justify-between w-full gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-lg label-text font-semibold">
                      Phone Number:
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Student Phone Number"
                    className="input input-bordered input-primary focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="text-lg label-text font-semibold">
                      Email:
                      <span className="text-[#0000005e]">(optional)</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered input-primary focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                    required
                  />
                </div>
              </div>
              {/*Guardian Information */}
              <div className="rounded-xl p-5 bg-[#d6d6d698]">
                <h1 className="text-xl font-bold border-[#888888] border-b-2">
                  Guardian Information:
                </h1>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="text-lg label-text font-semibold">
                        Phone Number:
                      </span>
                    </label>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-5">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="radio"
                            name="guardian"
                            className="radio radio-error"
                            required
                          />
                          <span className="label-text">Mom</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="radio"
                            name="guardian"
                            className="radio radio-error"
                            required
                          />
                          <span className="label-text">Dad</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="radio"
                            name="guardian"
                            className="radio radio-error"
                            required
                          />
                          <span className="label-text">Other</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter Guardian Number"
                        className="input input-bordered input-primary w-full focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="text-lg label-text font-semibold">
                        Phone Number:
                        <span className="text-[#0000005e]">(optional)</span>
                      </span>
                    </label>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="radio"
                            name="guardian"
                            className="radio radio-error"
                            required
                          />
                          <span className="label-text">Mom</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="radio"
                            name="guardian"
                            className="radio radio-error"
                            required
                          />
                          <span className="label-text">Dad</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="radio"
                            name="guardian"
                            className="radio radio-error"
                            required
                          />
                          <span className="label-text">Other</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter Guardian Number"
                        className="input input-bordered input-primary w-full focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* RNA */}
              <div className="rounded-xl p-5 bg-[#d6d6d698]">
                <h1 className="text-xl font-bold border-[#888888] border-b-2">
                  Meal & Room
                </h1>
                <div className="flex flex-col mt-5 md:flex-row gap-5">
                  <div className="w-full border-r-[2px] border-[#5a78ff] border-dashed">
                    <div className="form-control">
                      <div className="flex items-center gap-4">
                        <span className="text-lg label-text font-semibold">
                          RNA-
                        </span>
                        <input
                          type="tel"
                          placeholder="RNA-"
                          className="p-2 rounded-xl -ml-3 input-bordered input-primary border-[1px] focus:outline-none focus:border-blue-500 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] w-20"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control">
                      <div className="flex flex-col gap-4">
                        {/* ------------- */}
                        <div className="flex items-center gap-4">
                          <span className="text-lg label-text font-semibold">
                            Room Number-
                          </span>
                          <input
                            type="number"
                            placeholder="Room-"
                            className="p-2 rounded-xl -ml-3 input-bordered input-primary border-[1px] focus:outline-none focus:border-blue-500 transition-all border-[#c5c5c5] focus:bg-[#f0f0f0] w-20"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Password */}
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Password:
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input border-transparent  focus:outline-none focus:ring-0 transition-all border-[#d4d4d4] focus:bg-[#f0f0f0] "
                  required
                />
                <label className="label flex justify-between items-center">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-blue-600"
                  >
                    Forgot password?
                  </a>
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-blue-600"
                  >
                    Create account
                  </a>
                </label>
              </div> */}
              {/* Confirm Password */}
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Confirm Password:
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input bg-gray-200 border-transparent focus:bg-gray-200 focus:outline-none focus:ring-0 transition-all"
                  required
                />
              </div> */}

              {/* Department and Role
              <div className="flex md:flex-row flex-col md:gap-5 justify-between gap-2 mt-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Department:
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Department"
                    className="input input-bordered input-primary focus:outline-none focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Role:
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Role"
                    className="input input-bordered input-primary focus:outline-none focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div> */}

              {/* Submit and Reset Buttons */}
              <div className="form-control mt-6">
                <div className="flex w-full justify-between gap-4">
                  <button
                    onClick={() => {
                      window.location.reload(false);
                    }}
                    className="btn bg-[#fc4a4a]  btn-secondary w-1/2 text-xl"
                  >
                    Reset
                  </button>

                  <button className="btn btn-accent bg-[#12f16f] w-1/2 text-xl">
                    <span className="font-bold"> Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLogin;
