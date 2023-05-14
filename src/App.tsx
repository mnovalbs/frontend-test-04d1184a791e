import ListingAdCard from "components/ListingAdCard";
import mockAd from "contants/mockAd";

export default function App() {
  return (
    <div className="App">
      <ListingAdCard ad={mockAd} />
    </div>
  );
}
