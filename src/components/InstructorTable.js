import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstructor } from "store/users/actions";
import { Link } from "react-router-dom";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import DeleteIc from "assets/img/delete.svg";
import EditIc from "assets/img/edit.svg";

export default function InstructorTable() {
  const dispatch = useDispatch();

  const stateInstructor = useSelector((state) => state.users.instructors);

  useEffect(() => {
    dispatch(getInstructor());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">List Instruktur</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  #
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Nama
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Total Kelas
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody>
              {stateInstructor?.data?.records.length > 0
                ? stateInstructor?.data?.records.map((data, index) => {
                    return (
                      <tr key={data.id}>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {++index}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          <Link
                            to={`/instructorId/${data.id}`}
                            key={data.id}
                          >
                            <div className="flex">
                              <div className="w-14 h-14 flex items-center">
                                <Image
                                  className="w-full h-full"
                                  src={data.avatar}
                                  rounded
                                  alt="..."
                                />
                              </div>
                              <span className="flex items-center pl-4">
                                {data.name}
                              </span>
                            </div>
                          </Link>
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          <button className="bg-transparent w-10 h-10 border border-purple-500 rounded-full">
                            {data.total_courses}
                          </button>
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          <div className="flex">
                            <div className="w-10 h-10 flex items-center">
                              <Image src={EditIc} rounded alt="..." />
                            </div>
                            <div className="w-10 h-10 flex items-center">
                              <Image src={DeleteIc} rounded alt="..." />
                            </div>
                          </div>
                        </th>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
