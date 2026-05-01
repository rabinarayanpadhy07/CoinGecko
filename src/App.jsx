import CoinTable from "./components/CoinTable/CoinTAble";
function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-10">
      <h1 className="text-3xl font-bold">Crypto Tracker</h1>
      <main>
        <CoinTable />
      </main>
    </div>
  );
}
export default App;