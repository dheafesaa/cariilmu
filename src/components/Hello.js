import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";

export default function Hello() {
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex justify-center">
          <h2 className="text-white text-2xl font-medium">Hi Welcome-!</h2>
        </div>
      </CardHeader>
    </Card>
  );
}
