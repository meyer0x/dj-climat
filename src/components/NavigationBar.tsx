function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const items = [
	{ label: "Accueil" },
	{ label: "Notre projet" },
	{ label: "Connexion" },
];

export default function NavigationBar() {
	return (
		<div className="h-24 flex items-center justify-between px-24 border-b border-foreground">
			<img src={"/logo.webp"} className="h-20" alt="Alt" />
			<div className="flex items-center justify-end gap-12 flex-1">
				{items.map(item => (
					<div
						key={item.label}
						className="rounded-lg px-4 py-2  hover:bg-orange hover:text-foreground transition-all cursor-pointer hover:font-bold"
					>
						<p>{item.label}</p>
					</div>
				))}
			</div>
			<p />
		</div>
	);
}
