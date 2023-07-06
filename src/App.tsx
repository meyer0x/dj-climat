import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-background text-foreground">
			<NavigationBar />
			<div className="px-24 py-12 flex-1 flex flex-col">
				<Home />
			</div>
		</div>
	);
}

export default App;
