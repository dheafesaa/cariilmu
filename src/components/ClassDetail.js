import { useSelector } from "react-redux";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function ClassForm() {
  const user = useSelector((state) => state.users.user.data);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Detail Kelas</h2>
        </div>
      </CardHeader>
      <CardBody>
        <form>
          <div className="flex flex-wrap mt-5 -mx-4 justify-center">
            <div className="flex justify-between px-4 w-full mb-6">
              <div className="flex flex-col">
                <div className="text-sm mb-6">
                  {user?.code} | {user?.status}
                </div>
                <div className="text-2xl font-bold mb-6">{user?.name}</div>
                <div className="text-2xl font-bold">Rp {user?.price}</div>
              </div>
              <div className="flex w-72">
                <img className="rounded-lg" src={user?.cover} alt="..." />
              </div>
            </div>

            <div className="flex bg-gray-200 w-4/5 h-auto justify-between px-10 rounded-xl mb-6">
              <div className="flex flex-col text-center justify-center py-4">
                <div className="font-medium text-lg mb-2">Instruktur</div>
                {user?.instructors.map((instructor) => (
                  <div className="text-lg text-center">{instructor.name}</div>
                ))}
              </div>
              <div className="flex flex-col text-center justify-center py-4">
                <div className="font-medium text-lg mb-2">Durasi</div>
                <div className="text-lg text-center">
                  {user?.duration} Menit
                </div>
              </div>
              <div className="flex flex-col text-center justify-center py-4">
                <div className="font-medium text-lg mb-2">Bahasa</div>
                <div className="text-lg text-center">{user?.language}</div>
              </div>
              <div className="flex flex-col text-center justify-center py-4">
                <div className="font-medium text-lg mb-2">Sertifikat</div>
                <div className="text-lg text-center">{user?.certificate}</div>
              </div>
              <div className="flex flex-col text-center justify-center py-4">
                <div className="font-medium text-lg mb-2">Kompeten</div>
                <div className="text-lg text-center">
                  {user?.show_competence_aspects}
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full -mx-4">
              <div className="w-full lg:w-1/4 mb-6 px-2">
                <button className="w-full bg-white hover:bg-gray-100 py-2 px-4 border border-purple-500 rounded-lg">
                  {user?.course_type.name}
                </button>
              </div>
              <div className="w-full lg:w-1/4 mb-6 px-2">
                <button className="w-full bg-white hover:bg-gray-100 py-2 px-4 border border-purple-500 rounded-lg">
                  {user?.course_category.name}
                </button>
              </div>
              <div className="w-full lg:w-1/4 mb-6 px-2">
                <button className="w-full bg-white hover:bg-gray-100 py-2 px-4 border border-purple-500 rounded-lg">
                  {user?.course_level.name}
                </button>
              </div>
              <div className="w-full lg:w-1/4 mb-6 px-2">
                <button className="w-full bg-white hover:bg-gray-100 py-2 px-4 border border-purple-500 rounded-lg">
                  {user?.course_teach_method.name}
                </button>
              </div>
            </div>

            <div className="flex flex-col px-4 mb-6">
              <div className="font-bold text-2xl mb-3">Deskripsi</div>
              <p>{user?.description}</p>
            </div>
            
            <div className="flex px-4 w-full mb-6">
              <div className="flex flex-col">
                <div className="font-bold text-2xl mb-3">Materi Pelatihan</div>
                {user?.training_materials.map((material) => {
                  console.log(material);
                  return (
                    <div className="flex mb-3">
                      <li className="text-lg font-semibold" />
                      &nbsp;
                      <div className="flex flex-col">
                        <div className="text-lg font-semibold">
                          {material.title}
                        </div>
                        <span>{material.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex px-4 w-full mb-6">
              <div className="flex flex-col">
                <div className="font-bold text-2xl mb-3">Tujuan Pelatihan</div>
                <div className="text-lg font-semibold mb-3">Tujuan Umum</div>
                {user?.training_goals
                  .filter((goal) => goal.type === "UMUM")
                  .map((goal) => {
                    return (
                      <div className="flex mb-3">
                        <li className="text-lg font-semibold" />
                        &nbsp;
                        <div className="flex flex-col">
                          <span>{goal.description}</span>
                        </div>
                      </div>
                    );
                  })}
                <div className="text-lg font-semibold mb-3">Tujuan Khusus</div>
                {user?.training_goals
                  .filter((goal) => goal.type === "KHUSUS")
                  .map((goal) => {
                    return (
                      <div className="flex mb-3">
                        <li className="text-lg font-semibold" />
                        &nbsp;
                        <div className="flex flex-col">
                          <span>{goal.description}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {user?.aspects.length > 0 ? (
              <div className="flex px-4 w-full mb-6">
                <div className="flex flex-col">
                  <div className="font-bold text-2xl mb-3">
                    Aspek Kompetensi
                  </div>
                  <div className="text-lg font-semibold mb-3">
                    Aspek Pengetahuan
                  </div>
                  {user?.aspects
                    .filter((aspect) => aspect.type === "PENGETAHUAN")
                    .map((aspect) => {
                      return (
                        <div className="flex mb-3">
                          <li className="text-lg font-semibold" />
                          &nbsp;
                          <div className="flex flex-col">
                            <span>{aspect.description}</span>
                          </div>
                        </div>
                      );
                    })}
                  <div className="text-lg font-semibold mb-3">
                    Aspek Keterampilan
                  </div>
                  {user?.aspects
                    .filter((aspect) => aspect.type === "KETERAMPILAN")
                    .map((aspect) => {
                      return (
                        <div className="flex mb-3">
                          <li className="text-lg font-semibold" />
                          &nbsp;
                          <div className="flex flex-col">
                            <span>{aspect.description}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : null}
            <div className="flex px-4 w-full mb-6">
              <div className="flex flex-col">
                <div className="font-bold text-2xl mb-3">Kelompok Sasaran</div>
                <span> {user?.target_group} </span>
              </div>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
