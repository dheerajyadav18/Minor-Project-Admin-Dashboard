import React from "react";


export function ModifiedHome() {
  return (
    <>
      <div className="relative flex h-72  content-center items-center justify-center pt-0 pb-0 ">
        <div className="absolute top-0 h-full w-full rounded-b-3xl bg-[url('https://images.unsplash.com/photo-1669158424143-3be4e002b36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/10 bg-cover bg-center rounded-b-3xl" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <p className="text-3xl font-bold text-white">Admin Dashboard Makes You Faster!!</p>
            <p className="mt-8 font-semibold text-sm text-yellow-100">
            If you want to shine like a Sun then first you have to burn like a
            sun!!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifiedHome;