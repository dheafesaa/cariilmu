import { useSelector } from "react-redux";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Insta from "assets/img/instagram.png";
import Linked from "assets/img/linkedin.png";

export default function InstructorDetail() {
  const instructor = useSelector((state) => state.users.instructor.data);
  
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Detail Instruktur</h2>
        </div>
      </CardHeader>
      <CardBody>
        <form>
          <div className="flex mb-6">
            <div className="flex h-72">
              <img
                className="rounded-lg w-full h-full"
                src={instructor?.avatar}
                alt="..."
              />
            </div>
            <div className="flex flex-col pl-8 w-full lg:w-3/4">
              <div className="text-xl font-medium mb-3">{instructor?.name}</div>
              <p>{instructor?.description}</p>
              {instructor?.social_media.length > 0 ? (
                <div className="flex mt-4">
                  {instructor?.social_media
                    .filter((sosmed) => sosmed.type === "INSTAGRAM")
                    .map((sosmed) => {
                      return (
                        <div className="flex flex-col">
                          <a href={sosmed.url} className="w-8 h-8 mr-4">
                            <Image src={Insta} rounded alt="..." />
                          </a>
                        </div>
                      );
                    })}
                  {instructor?.social_media
                    .filter((sosmed) => sosmed.type === "LINKEDIN")
                    .map((sosmed) => {
                      return (
                        <div className="flex flex-col">
                          <a href={sosmed.url} className="w-8 h-8 mr-4">
                            <Image src={Linked} rounded alt="..." />
                          </a>
                        </div>
                      );
                    })}
                </div>
              ) : null}
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
