export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center pt-40">
      <button type="button" className="bg-primary-blue text-white font-bold py-2 px-4 rounded-md inline-flex items-center text-2xl">
        <svg className="animate-spin h-20 w-20 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Loading...
      </button>
    </div>
  );
}
