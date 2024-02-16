import config from "@/utils/config";
import "./DepenseListe.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DepenseListeAliment from "../../components/DepenseListeAliment/DepenseListeAliment";
import DepenseListeTransport from "../../components/DepenseListeTransport/DepenseListeTransport";
import DepenseListeMultimedia from "@/components/DepenseListeMultimedia/DepenseListeMultimedia";

const DepenseListe = () => {
  return (
    <div className="DepenseListe">
      <h3>Listes</h3>
      <Tabs defaultValue="aliment" className="w-full">
        <TabsList className="tabList">
          <TabsTrigger className="tabsTrigger" value="aliment">
            <img
              src={`${config.image_base_url}/assets/images/food.png`}
              alt="food image"
              className="w-7"
            />
            Aliments
          </TabsTrigger>
          <TabsTrigger className="tabsTrigger" value="transport">
            <img
              src={`${config.image_base_url}/assets/images/bus.png`}
              alt="bus image"
              className="w-5"
            />
            Transport
          </TabsTrigger>
          <TabsTrigger className="tabsTrigger" value="multimedia">
            <img
              src={`${config.image_base_url}/assets/images/multimedia.png`}
              alt="food image"
              className="w-5"
            />
            Divertsissement
          </TabsTrigger>
          <TabsTrigger className="tabsTrigger" value="autres">
            <img
              src={`${config.image_base_url}/assets/images/multimedia.png`}
              alt="food image"
              className="w-5"
            />
            Autres
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aliment">
          <DepenseListeAliment />
        </TabsContent>
        <TabsContent value="transport">
          <DepenseListeTransport />
        </TabsContent>
        <TabsContent value="multimedia">
          <DepenseListeMultimedia />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default DepenseListe;
