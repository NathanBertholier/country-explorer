import { Country } from "@/types/types";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import dynamic from 'next/dynamic'; // Composant LeafletMap chargé dynamiquement 
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function ContryCard({ country }: { country: Country }) {
    return (<div>
        <Card className=" py-2 shadow-lg" >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{country.name}</p>
                <small className="text-default-500">{country.region.value}</small>
                <h4 className="font-bold text-large">{country.capitalCity}</h4>
            </CardHeader>
            <CardBody className="py-2 z-0">
                <Map country={country} />
            </CardBody>
        </Card>
    </div>)
}