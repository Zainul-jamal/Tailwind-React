import React from "react";

function Tailwind() {
  return (
    <>
      <div className="m-2">
        <div class=" flex justify-between py-2 bg-[wheat] ">
          <div className="px-3">
            <img
              width={70}
              className="rounded-full"
              src="https://up.yimg.com/ib/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115"
              alt=""
            />
          </div>

          <nav className=" pt-4">
            <a
              href="/dashboard"
              class="font-bold px-3 py-2 text-black rounded-full hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </a>
            <a
              href="/team"
              class="font-bold px-3 py-2 text-black rounded-full hover:bg-slate-100 hover:text-slate-900"
            >
              Team
            </a>
            <a
              href="/projects"
              class="font-bold px-3 py-2 text-black rounded-full hover:bg-slate-100 hover:text-slate-900"
            >
              Projects
            </a>
            <a
              href="/reports"
              class="font-bold px-3 py-2 text-black rounded-full hover:bg-slate-100 hover:text-slate-900"
            >
              Reports
            </a>
          </nav>
        </div>

        {/* Hero Section */}
        <main className="flex justify-evenly">
          <div className="">
            <h2 className="mt-40 font-serif font-bold text-[purpl]">
              My Best Mobile Phone Shop in WOrld;
              <h3 className="pt-4">Check it now</h3>{" "}
            </h2>
          </div>
          <div className=" w-64 h-64 pt-40 ">
            <img
              className=""
              src="https://mobilepriceall.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg"
              alt=""
            />
          </div>
        </main>
        <div className="pt-48 font-mono text-2xl  text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tenetur odit sed perferendis quam illum, a in
            sapiente fuga repudiandae corrupti consectetur dolorem dicta
            explicabo ab harum cupiditate illo eaque.
          </p>
        </div>

        {/*Footer Section  */}

        <main className="bg-[wheat] pb-0 mb-0 mt-52 ">
          <h3 className="font-serif font-bold text-center pb-5 pt-4">Footer</h3>
          <div>
            <ul className="flex justify-evenly border-double">
              <li className="border-x-2 border-y-2 border-black rounded-full hover:bg-[black] hover:text-white border-x-8">
                Marketing
              </li>
              <li className="border-x-2 border-y-2 border-black rounded-full hover:bg-[black] hover:text-white">
                Commerce
              </li>
              <li className="border-x-2 border-y-2 border-black rounded-full hover:bg-[black] hover:text-white">
                Company details
              </li>
              <li className="border-x-2 border-y-2 border-black rounded-full hover:bg-[black] hover:text-white">
                Partners
              </li>
            </ul>
          </div>
          <div className=" pt-8">
            <div className="flex justify-center">
              <b className="mr-6">Subscribe to our newslette</b>
              <p className="s">
                The latest news, articles, and resources, sent to your inbox
                weekly
              </p>
            </div>
            <div className="flex justify-center">
              <input
                className="h-8 p-4 w-60 mt-4 rounded-full"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="font-bold font-serif border-y-2 border-black rounded-2xl hover:bg-[black] hover:text-white h-8 w-24 my-4 ml-2 ">
                Subscribe
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Tailwind;
