import { FaHandPointDown } from "react-icons/fa";
import FailedModal from "@/components/modal/FailedModal";
import Image from "next/image";

export default function LoginPageComponent({ props }) {
  const email = props.email;
  const emailError = props.emailError;
  const password = props.password;

  const handleEmailChange = props.handleEmailChange;
  const handlePasswordChange = props.handlePasswordChange;
  const handleSubmit = props.handleSubmit;

  const isLoading = props.isLoading;

  const openModalAuthFail = props.openModalAuthFail;
  const closeModalAuthFail = props.closeModalAuthFail;

  return (
    <div className="min-h-screen grid place-items-center bg-secondary-lightmedium p-4">
      <div className="flex rounded-3xl overflow-x-hidden">
        <div className="flex flex-col gap-2 justify-center items-center py-16 px-4 w-full lg:w-3/5 bg-primary-blue">
          <h2 className="text-lg lg:text-2xl font-bold text-primary-white">Selamat Datang Kembali, Admin</h2>
          <div className="flex items-center gap-2 text-primary-white">
            <p className="text-primary-white">Akses Akunmu, dibawah ini </p>
            <FaHandPointDown />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:px-6 w-full text-left">
            <label htmlFor="Email" className="text-primary-white flex flex-col text-lg">
              Email
              <input
                type="email"
                name="email"
                className="p-2 rounded-lg border text-black text-base outline-none focus:border-2 focus:border-secondary-activeblue"
                placeholder="example@mail.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <p className="text-sm text-red-500 ml-1 mt-1">{emailError}</p>}
            </label>
            <label htmlFor="Password" className="text-primary-white flex flex-col text-lg">
              Password
              <input
                type="password"
                name="password"
                className="p-2 rounded-lg border text-black text-base outline-none focus:border-2 focus:border-secondary-activeblue"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </label>
            <button type="submit" disabled={isLoading} className="bg-secondary-activeblue rounded-xl text-primary-white py-2 hover:scale-105 font-bold text-lg">
              {isLoading ? "Logging in..." : "Masuk"}
            </button>
          </form>
        </div>
        <div className="px-16 py-32 justify-center items-center bg-white hidden lg:flex">
          <Image src={"/bg_auth.jpg"} alt="Background Auth Admin" width={400} height={400} priority />
        </div>
      </div>
      <div className="absolute justify-center items-center">
        <FailedModal open={openModalAuthFail} title="Auth Failed" description="Email or Password Incorrect" onClose={closeModalAuthFail} />{" "}
      </div>
    </div>

    // <section className="bg-secondary-light min-h-screen flex items-center justify-center">
    //   <div className="bg-primary-blue flex rounded-2xl shadow-lg max-w-3xl items-center">
    //     <div className="md:w-1/2 px-8 md:px-16 p-5">
    //       <h2 className="font-bold text-2xl text-primary-white">Login</h2>
    //       <p className="text-xs mt-4 text-primary-white">If you are already a member, easily log in</p>

    //       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    //         <input className="p-2 mt-8 rounded-xl border" type="email" name="email" required autoFocus autoComplete="username" placeholder="Email" value={email} onChange={handleEmailChange} />
    //         {emailError && <p className="text-sm text-red-500">{emailError}</p>}
    //         <div className="relative">
    //           <input className="p-2 rounded-xl border w-full" type="password" name="password" autoComplete="current-password" placeholder="Password" value={password} onChange={handlePasswordChange} />
    //         </div>
    //         <button type="submit" disabled={isLoading} className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
    //           {isLoading ? "Logging in..." : "Masuk"}
    //         </button>
    //       </form>
    //     </div>
    //     <div className="md:block hidden w-1/2">
    //       <Image src="/bg_auth.jpg" width={300} height={300} alt="background auth" className="w-auto rounded-tr-2xl rounded-br-2xl" priority />
    //     </div>
    //   </div>
    //   <div className="absolute justify-center items-center">
    //     <FailedModal open={openModalAuthFail} title="Auth Failed" description="Email or Password Incorrect" onClose={closeModalAuthFail} />
    //   </div>
    // </section>
  );
}
