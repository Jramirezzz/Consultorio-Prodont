import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export function CardHome() {
  return (
    <Card className="py-4 " radius="sm">
      <div className="flex flex-row items-start">
        <div className="flex flex-col flex-grow">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 row-span-3">
            Contenido del cuerpo de la tarjeta aquí...
          </CardBody>
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </div>
      </div>
    </Card>
  );
}