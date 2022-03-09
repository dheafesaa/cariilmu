import Hello from "components/Hello";

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full -mt-10">
          <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
            <Hello />
          </div>
        </div>
      </div>
    </>
  );
}
