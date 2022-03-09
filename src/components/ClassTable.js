import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "store/users/actions";
import { Link } from "react-router-dom";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import DeleteIc from "assets/img/delete.svg";
import EditIc from "assets/img/edit.svg";

export default function ClassTable() {
  const dispatch = useDispatch();
  
  const stateUsers = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">List Kelas</h2>
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
                  Kategori
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Tingkat
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Metode
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody>
              {stateUsers?.data?.records.length > 0 ? (
                stateUsers?.data?.records.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {++index}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <Link to={`/classId/${item.id}`}>
                          {item.name}
                        </Link>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <button className="bg-transparent py-2 px-4 border border-gray-500 rounded-full">
                          Pengembangan Diri
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <button className="bg-transparent py-2 px-4 border border-purple-500 rounded-full">
                          Tingkat Dasar
                        </button>
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <button className="bg-transparent py-2 px-4 border border-gray-500 rounded-full">
                          Self Paced Learning
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
              ) : (
                null
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
