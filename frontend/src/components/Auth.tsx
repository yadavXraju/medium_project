import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@raju_yadav/meduim_project-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate  =  useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequests(){
    try{

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup":"signin"}`,postInputs);
      const jwt = response.data;
      localStorage.setItem("token",jwt);
      navigate("/blogs");
    }catch(e){
        alert("While error during the signin page")
    }
  }



  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Create an account</div>
              <div className="text-slate-500">
                {type === "signin"? "Don't have an account?":"Already have an account"}
                <Link to={type=== "signin"?"/signup":"/signin"} className="text-blue-600 pl-2 underline">
                   {type === 'signin' ? "Sign up":"Sign in"}
                </Link>
              </div>
            </div>

            <div className="pt-7">
              <div className="">
                {type=="signup"?<LabelledInput
                  label="Name"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setPostInputs({
                      ...postInputs,
                      name: e.target.value,
                    });
                  }}
                />:null }
              </div>

              <LabelledInput
                label="Email"
                placeholder="Enter your Email"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email: e.target.value,
                  });
                }}
              />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="Enter your password"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <div className="pt-4">
              <button onClick={sendRequests} type="button" className="text-gray-900 w-full bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">{type=== "signup" ? "Sign up":"Sign in"}</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-black-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
